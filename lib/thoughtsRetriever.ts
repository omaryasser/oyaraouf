import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Thought = {
  slug: string;
  title: string;
  date: string;
  summary: string | null;
  content: string;
  type: string;
  previousSlug: string | null;
  nextSlug: string | null;
};

/**
 * Gets all thoughts from the `app/thoughts/data` folder.
 */
export function getAllThoughts(): Thought[] {
  const thoughtsDir = path.join(process.cwd(), 'app', 'thoughts', 'data');
  const filenames = fs.readdirSync(thoughtsDir);

  let thoughts = filenames
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(thoughtsDir, file);
      const rawContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(rawContent);

      return {
        slug: file.replace(/\.md$/, ''), // e.g. "resume-advice.md" => "resume-advice"
        title: data.title ?? 'Untitled Thought',
        date: data.date ?? 'No Date',
        summary: data.summary ?? null,
        type: data.type ?? 'No type',
        content,
      } as Thought;
    });
    thoughts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    thoughts.map((thought, idx) => {
      thought.previousSlug = idx > 0 ? thoughts[idx - 1].slug : null;
      thought.nextSlug = idx < thoughts.length - 1 ? thoughts[idx + 1].slug : null;
      return thought;
    });
    return thoughts;
}

export function getThoughtBySlug(slug: string): Thought | null {
  const thoughts = getAllThoughts();
  for (const thought of thoughts) {
    if (thought.slug === slug) {
      return thought;
    }
  }
  return null;
}
