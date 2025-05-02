import { useEffect, useState } from "react";

type QuestionProps = {
  question: string;
  options: string[];
  answer: string;
};

// type AllQuestionsProps = QuestionProps[];

// type QuizzesProps = {
//   title: string;
//   icon: string;
//   questions: AllQuestionsProps;
// };

export default function HTML() {
  const [questions, setQuestions] = useState<QuestionProps | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(1);

  useEffect(function () {
    async function fetchData() {
      const data = await fetch("/data.json");
      const response = await data.json();
      setQuestions(response.quizzes[0].questions[0]); // grabs a single object from the response json
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex items-center">
        <span className="bg-[var(--html-background)] p-1 rounded-lg">
          <img src="/images/icon-html.svg" alt="HTML icon" />
        </span>
        <h1 className="ml-3">HTML</h1>
      </div>

      <div className="grid grid-cols-2 mt-10">
        <div>
          <small className="text-gray-400 italic">
            Question {questionCount} of 10
          </small>
          <h1 className="text-4xl font-bold">{questions?.question}</h1>
        </div>
        <ul>
          {questions?.options.map((option, index) => (
            <li
              key={index}
              className="bg-[var(--option-bg)] mb-5 text-[20px] p-5 rounded-2xl cursor-pointer transition-transform duration-400 hover:translate-x-10"
            >
              {index === 0 && (
                <QuizOptionId>
                  <span>A</span>
                </QuizOptionId>
              )}
              {index === 1 && (
                <QuizOptionId>
                  <span>B</span>
                </QuizOptionId>
              )}
              {index === 2 && (
                <QuizOptionId>
                  <span>C</span>
                </QuizOptionId>
              )}
              {index === 3 && (
                <QuizOptionId>
                  <span>D</span>
                </QuizOptionId>
              )}
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type QuizOptionIdProps = {
  children: React.ReactNode;
};

function QuizOptionId({ children }: QuizOptionIdProps) {
  return (
    <span className="bg-white text-[var(--option-bg)] py-3 px-4 mr-3 font-bold rounded-lg">
      {children}
    </span>
  );
}
