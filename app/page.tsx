import Image from "next/image";
import Link from "next/link";
import Typewriter from "./typewriter";

export default function Home() {
  return (
    <div className="max-w">
      {/* Main content container */}
      <main className="max-w w-full text-center">
        {/* Avatar + Intro */}
        <section className="flex max-w flex-col items-center bg-white p-8">
          <div className="max-w-3xl flex flex-col items-center">
            <div className="relative  w-24 h-24 pt-8">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.png`}
                alt="Omar's avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-2xl  px-8 pt-8">
              {" "}
              <Typewriter
                text="I'm Omar 👋 Someone who happened to know some stuff about software engineering, career, and people."
                speed={40}
              />
            </h2>
          </div>
        </section>

        {/* Ask Me Anything section */}
        <section className="flex max-w flex-col items-center p-8 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">Ask Me Anything 🤔</h2>
            <blockquote className="italic text-lg  px-16 pt-4 pb-8">
              I am learning by asking as much as I am learning by studying and
              by doing.
            </blockquote>
            <p className="text-lg leading-relaxed">
              Send me anonymous questions, whether they're about software
              engineering or anything else—if I know the answer, I'll do my best
              to share it with you!
            </p>
            <Link href="/ask" passHref>
              <button className="m-4 px-16 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors">
                Ask
              </button>
            </Link>
          </div>
        </section>

        {/* Thoughts section */}
        <section className="flex max-w flex-col items-center bg-white text-black p-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">Thoughts ☁</h2>
            <blockquote className="italic text-lg px-16 pt-4 pb-8">
              Along your path in life, your thoughts and opinions will evolve
              and mature. Allow them the time to develop before teaching others,
              and when you do share, stay open to feedback for further
              refinement.
            </blockquote>
            <p className="text-lg">
              Read my answers, articles, and posts and send me feedback.
            </p>
            <Link href="/thoughts" passHref>
              <button className="m-4 px-16 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors">
                Read
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
