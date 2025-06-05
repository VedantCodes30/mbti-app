export default function About() {
  return (
    <div className="bg-gradient min-h-screen p-6 ">
      <section className="max-w-3xl mx-auto text-white space-y-10">
        {/* Intro */}
        <div className="space-y-4 ">
          <h1 className="text-3xl font-bold">
            What is <span>PersonaQuest</span>?
          </h1>
          <p>
            PersonaQuest is an interactive flashcard quiz based on the
            Myers-Briggs Type Indicator (MBTI). It helps you discover your
            personality type through a series of thought-provoking questions.
          </p>
          <p>
            Understand yourself better — are you an introvert or extrovert? A
            thinker or feeler? PersonaQuest gives you insights in a fun and
            engaging way.
          </p>
        </div>

        {/* How It Works */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Your Personality Is Calculated
          </h2>
          <p>
            Every question in the quiz corresponds to one of the MBTI trait
            pairs (like E vs I). Your responses are tallied, and your dominant
            preferences determine your final MBTI type.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Agree</strong> = supports the trait shown
            </li>
            <li>
              <strong>Disagree</strong> = supports the opposite trait
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Disclaimer</h3>
          <p>
            PersonaQuest is not a scientifically validated psychological
            assessment. It’s a simplified interpretation of the MBTI model
            intended for personal exploration, reflection, and fun!
          </p>
        </div>

        {/* Learn More */}
        <div className="space-y-2 learn-more">
          <h3 className="text-xl font-semibold">Learn More</h3>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://www.16personalities.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                16personalities.com
              </a>
            </li>
            <li>
              <a
                href="https://www.myersbriggs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Official MBTI Site
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
