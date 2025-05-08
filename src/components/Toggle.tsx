import { LuMoon } from "react-icons/lu";
import { FaRegSun } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Toggle() {
  const { lightMode, toggleLightMode } = useContext(ThemeContext);
  const [click, setClcik] = useState(false);
  function handleClickToggle() {
    setClcik((click) => !click);
  }

  return (
    <div className="flex">
      <div></div>
      <button className="flex items-center gap-3">
        <LuMoon className="text-3xl cursor-pointer" />
        <div
          className={`bg-[var(--submit-button)] w-[4.8rem] h-[2.8rem] rounded-full flex items-center p-2 cursor-pointer`}
          onClick={() => {
            handleClickToggle();
            toggleLightMode();
          }}
        >
          <div
            className={`bg-white w-[30px] h-[30px] rounded-full duration-300 ${
              click ? "translate-x-8" : ""
            }`}
          ></div>
        </div>
        <FaRegSun className="text-3xl cursor-pointer" />
      </button>
    </div>
  );
}
