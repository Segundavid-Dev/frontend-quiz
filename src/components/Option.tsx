import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import { useContext } from "react";

export default function Option() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <div className="">
      <ul>
        <li
          className={`mb-5 py-3 pl-3 ${
            lightMode ? "bg-white" : "bg-[var(--option-bg)]"
          } rounded-2xl`}
        >
          <Link to={"/HTML"} className="flex items-center ">
            <span className="bg-[var(--html-background)] p-2 rounded-lg">
              <img src="/images/icon-html.svg" alt="Html icon" />
            </span>
            <span className="ml-3">HTML</span>
          </Link>
        </li>

        <li
          className={`mb-5 py-3 pl-3 ${
            lightMode ? "bg-white" : "bg-[var(--option-bg)]"
          } rounded-2xl`}
        >
          <Link to={"/CSS"} className="flex items-center">
            <span className="bg-[var(--css-background)] p-2 rounded-lg">
              <img src="/images/icon-css.svg" alt="CSS icon" />
            </span>
            <span className="ml-3">CSS</span>
          </Link>
        </li>

        <li
          className={`mb-5 py-3 pl-3 ${
            lightMode ? "bg-white" : "bg-[var(--option-bg)]"
          } rounded-2xl`}
        >
          <Link to={"/Javascript"} className="flex items-center">
            <span className="bg-[var(--javascript-background)] p-2 rounded-lg">
              <img src="/images/icon-js.svg" alt="Javascript icon" />
            </span>
            <span className="ml-3">Javascript</span>
          </Link>
        </li>

        <li
          className={`mb-5 py-3 pl-3 ${
            lightMode ? "bg-white" : "bg-[var(--option-bg)]"
          } rounded-2xl`}
        >
          <Link to={"/Accessibility"} className="flex items-center">
            <span className="bg-[var(--accessibility-background)] p-2 rounded-lg">
              <img
                src="/images/icon-accessibility.svg"
                alt="Accessibility icon"
              />
            </span>
            <span className="ml-3">Accessibility</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
