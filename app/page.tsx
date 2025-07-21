import Image from "next/image";
import Link from "next/link";
import Typewriter from "./typewriter";
import QuestionForm from "./questionForm";

export default function Home() {
  return (
    <div className="max-w">
      {/* Main content container */}
      <main className="max-w w-full text-center">
        {/* Hero section */}
        <section className="flex max-w flex-col items-center bg-white p-8">
          <div className="max-w-3xl flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 pt-8 group">
              <Image
                src="favicon.png"
                alt="Omar's avatar"
                fill
                className="rounded-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h2 className="text-2xl md:text-3xl px-4 pt-8 text-black leading-relaxed">
              <Typewriter
                text="I'm Omar 👋 Someone who happened to know some stuff about software engineering, career, and people."
                speed={60}
              />
            </h2>
          </div>
        </section>

        {/* Ask Me Anything section */}
        <section className="flex max-w flex-col items-center p-8 text-white bg-grey">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ask Me Anything 🤔</h2>
            <blockquote className="italic text-lg px-4 pt-4 pb-8 max-w-3xl mx-auto relative">
              I am learning by asking as much as I am learning by studying and
              by doing.
            </blockquote>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              Send me anonymous questions, whether they're about software
              engineering or anything else—if I know the answer, I'll do my best
              to share it with you!
            </p>
            <QuestionForm />
          </div>
        </section>

        {/* Thoughts section */}
        <section className="flex max-w flex-col items-center bg-white text-black p-8">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Thoughts 💭</h2>
            <blockquote className="italic text-lg px-4 pt-4 pb-8 max-w-3xl mx-auto relative">
              Along your path in life, your thoughts and opinions will evolve
              and mature. Allow them the time to develop before teaching others,
              and when you do share, stay open to feedback for further
              refinement.
            </blockquote>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              Read my answers, articles, and posts and send me feedback.
            </p>
            <Link href="/thoughts" passHref>
              <button className="group relative inline-flex items-center mt-6 px-8 py-3 bg-transparent border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300">
                <span className="mr-2">Read</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
