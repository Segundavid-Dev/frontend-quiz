import { useEffect, useState } from "react";

import { MdOutlineCancel } from "react-icons/md";

type QuestionProps = {
  question: string;
  options: string[];
  answer: string;
};

export default function HTML() {
  const [questions, setQuestions] = useState<QuestionProps | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [optionClicked, setOptionClicked] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [Answer, setAnswer] = useState<string | null>(null);
  // handling question status
  const [borderSelectedOption, setBorderSelectedOption] = useState(false);
  const [submitQuestion, setSubmitQuestion] = useState(false);

  function handleClickOption(index: number, option: string) {
    // early return to handle selecting multiple answers
    if (submitQuestion && selectedOptionIndex !== null) return;
    setOptionClicked(true);
    setSelectedOptionIndex(index); // set the clicked option index
    setDisplayError(false);

    // handle correct or wrong option here
    if (option === Answer) {
      setBorderSelectedOption(true);
    }
  }

  function handleQuestionStatus(option: string) {
    if (option === Answer) {
      setBorderSelectedOption(true);
    } else {
      setBorderSelectedOption(false);
    }
  }

  function handleSubmit() {
    setSubmitQuestion(true);
    if (!optionClicked) {
      setDisplayError(true);
    }
  }

  function handleNextQuestion() {
    const newValue = questionCount + 1;
    // early return
    if (questionCount >= 9) return;
    setQuestionCount(newValue);
    setOptionClicked(false);
    setSelectedOptionIndex(null);
  }

  useEffect(
    function () {
      async function fetchData() {
        const data = await fetch("/data.json");
        const response = await data.json();
        setQuestions(response.quizzes[0].questions[questionCount]); // grabs a single object from the response json
        setAnswer(response.quizzes[0].questions[questionCount].answer);
        // select answer string
      }
      fetchData();
    },
    [questionCount]
  );
  return (
    <div>
      <div className="flex items-center">
        <span className="bg-[var(--html-background)] p-1 rounded-lg">
          <img src="/images/icon-html.svg" alt="HTML icon" />
        </span>
        <h1 className="ml-3">HTML</h1>
      </div>

      <div className="grid grid-cols-2 mt-5">
        <div className="w-[80%]">
          <small className="text-gray-400 italic">
            Question {questionCount + 1} of 10
          </small>
          <h1 className="text-4xl font-bold">{questions?.question}</h1>
        </div>
        <ul>
          {questions?.options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                handleClickOption(index, option);
                handleQuestionStatus(option);
              }}
              className={`bg-[var(--option-bg)] mb-5 p-5 rounded-2xl ${
                submitQuestion ? "cursor-not-allowed" : "cursor-pointer"
              } transition-transform duration-400 hover:border-[var(--submit-button)] ${
                selectedOptionIndex === index ? "translate-x-10" : ""
              }
              `}
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
          {submitQuestion ? (
            <button
              className="bg-[var(--submit-button)] w-full p-5 rounded-2xl cursor-pointer hover:bg-[var(--submit-button-hover)] duration-300 font-bold"
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          ) : (
            <button
              className="bg-[var(--submit-button)] w-full p-5 rounded-2xl cursor-pointer hover:bg-[var(--submit-button-hover)] duration-300 font-bold"
              onClick={handleSubmit}
            >
              Submit Answer
            </button>
          )}
          {displayError && (
            <p className="text-[18px] flex items-center justify-center gap-2 pt-2">
              <span>
                <MdOutlineCancel className="text-red-500" />
              </span>
              <span>Please select an option</span>
            </p>
          )}
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
