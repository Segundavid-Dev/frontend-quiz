import { useLocation, useNavigate } from "react-router-dom";

export default function Finished() {
  const location = useLocation();
  const navigate = useNavigate();

  const correctScore = location.state?.correctScore;
  const icon = location.state?.icon;
  const title = location.state?.title;

  function handlePlayAgain() {
    navigate("/");
    console.log("Quiz restarted");
  }

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-6xl">
          Quiz Completed <br />{" "}
          <span className="font-bold">You Scored... </span>
        </h1>
      </div>
      <div>
        <div className="bg-white text-[var(--option-bg)] font-bold p-15 rounded-[2.4rem] w-[35vw]">
          <div>
            <div className="flex items-center justify-center gap-4 mb-5">
              <img src={`/images/${icon}`} alt="icon" />
              <p>{title}</p>
            </div>
            <p className="text-9xl font-bold text-center mb-1">
              {correctScore}
            </p>
            <h1 className="text-center text-2xl">
              <br />
              out of 10
            </h1>
          </div>
        </div>

        <div>
          <button
            className="mt-12 w-full rounded-2xl bg-purple cursor-pointer text-white transition-all duration-300 bg-[var(--submit-button)] py-5 font-bold"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}
