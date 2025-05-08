import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { MdOutlineCancel } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";

type QuestionProps = {
  question: string;
  options: string[];
  answer: string;
};

export default function Accessibility() {
  const [questions, setQuestions] = useState<QuestionProps | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [optionClicked, setOptionClicked] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [Answer, setAnswer] = useState<string | null>(null);
  const [submitQuestion, setSubmitQuestion] = useState(false);
  const [submittedOption, setSubmittedOption] = useState<string>("");
  const [progressBar, setProgressBar] = useState<number>(10);
  const [correctScore, setCorrectScore] = useState(0);
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");

  const { lightMode } = useContext(ThemeContext);

  function handleClickOption(index: number) {
    // early return to handle selecting multiple answers
    if (submitQuestion && selectedOptionIndex !== null) return;
    setOptionClicked(true);
    setSelectedOptionIndex(index); // set the clicked option index
    setDisplayError(false);
  }

  function handleQuestionStatus(option: string) {
    setSubmittedOption(option);
  }

  function handleSubmit() {
    if (!optionClicked) {
      setDisplayError(true);
    }
    setSubmitQuestion(true);
    if (submittedOption === Answer) {
      setCorrectScore((correctScore) => correctScore + 1);
    }
  }

  function handleNextQuestion() {
    // reset submittedOption back to default upon every click of "Next Button"
    if (submittedOption) {
      setSubmitQuestion(false);
    }
    setSubmittedOption("");
    // early return to handle not selecting any options
    if (!submittedOption) return;
    const newValue = questionCount + 1;
    // early return
    if (questionCount >= 9) return;
    setQuestionCount(newValue);
    setOptionClicked(false);
    setSelectedOptionIndex(null);

    // update progressBar count
    setProgressBar((progressBar) => progressBar + 10);
  }

  useEffect(
    function () {
      async function fetchData() {
        const data = await fetch("/data.json");
        const response = await data.json();
        setQuestions(response.quizzes[3].questions[questionCount]); // grabs a single object from the response json
        setAnswer(response.quizzes[3].questions[questionCount].answer);
        // select answer string
        setIcon(response.quizzes[3].icon);
        setTitle(response.quizzes[3].title);
      }
      fetchData();
    },
    [questionCount]
  );
  return (
    <div>
      <div className="flex items-center">
        <span className="bg-[var(--accessibility-background)] p-1 rounded-lg">
          <img src="images\icon-accessibility.svg" alt="Accessibility icon" />
        </span>
        <h1 className="ml-3">Accessibility</h1>
      </div>

      <div className="grid grid-cols-2 mt-5 max-sm:grid-cols-1">
        <div className="flex flex-col gap-40 max-sm:flex-col-reverse max-sm:gap-5">
          <div className="w-[80%] max-sm:w-full max-sm:mb-5">
            <small className="text-gray-400 italic">
              Question {questionCount + 1} of 10
            </small>
            <h1 className="text-4xl font-bold max-sm:text-2xl">
              {questions?.question}
            </h1>
          </div>

          <div>
            <progress
              value={progressBar}
              max={100}
              className="w-[80%] max-sm:w-full mx-auto overflow-hidden [&::-webkit-progress-bar]:bg-[var(--option-bg)] [&::-webkit-progress-value]:bg-[var(--submit-button)] [&::-moz-progress-bar]: bg-[var(--submit-button)] h-2 rounded-full"
            ></progress>
          </div>
        </div>
        <ul>
          {questions?.options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                handleClickOption(index);
                handleQuestionStatus(option);
              }}
              className={`bg-[var(--option-bg)] mb-5 p-3 rounded-2xl ${
                submitQuestion && submittedOption
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } transition-transform duration-400 hover:border-[var(--submit-button)] ${
                selectedOptionIndex === index && !submitQuestion
                  ? "translate-x-10"
                  : ""
              }
                  ${
                    submitQuestion && optionClicked && option === Answer
                      ? "bg-emerald-500"
                      : submitQuestion &&
                        option === submittedOption &&
                        option !== Answer
                      ? "bg-red-500"
                      : lightMode
                      ? "bg-white"
                      : "bg-[var(--option-bg)]"
                  }
              `}
            >
              <div className="flex items-center">
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
                <span>{option}</span>
              </div>
            </li>
          ))}
          {submitQuestion && questionCount >= 9 ? (
            <SubmitQuizNavigate
              correctScore={correctScore}
              icon={icon}
              title={title}
            />
          ) : submitQuestion && questionCount < 9 ? (
            <button
              className={`bg-[var(--submit-button)] w-full p-5 rounded-2xl cursor-pointer hover:bg-[var(--submit-button-hover)] duration-300 font-bold ${
                lightMode && "text-white"
              }`}
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          ) : (
            <button
              className={`bg-[var(--submit-button)] w-full p-5 rounded-2xl cursor-pointer hover:bg-[var(--submit-button-hover)] duration-300 font-bold ${
                lightMode && "text-white"
              } `}
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
    <span
      className={`bg-white text-[var(--option-bg)] py-3 px-4 mr-3 font-bold rounded-lg`}
    >
      {children}
    </span>
  );
}

type correctScoreProps = {
  correctScore: number;
  icon: string;
  title: string;
};

function SubmitQuizNavigate({ correctScore, icon, title }: correctScoreProps) {
  console.log(title);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/finished", { state: { correctScore, icon, title } });
  }

  return (
    <div>
      <button
        className="bg-[var(--submit-button)] w-full p-5 rounded-2xl cursor-pointer hover:bg-[var(--submit-button-hover)] duration-300 font-bold"
        onClick={handleNavigate}
      >
        Submit Quiz
      </button>
    </div>
  );
}
