import { Link } from "react-router-dom";

export default function Option() {
  return (
    <div className="">
      <ul className="">
        <Link to={"/HTML"}>
          <li className="flex items-center mb-5 pr-60 py-3 pl-3 bg-[var(--option-bg)] rounded-2xl">
            <span className="bg-[var(--html-background)] p-2 rounded-lg">
              <img src="/images/icon-html.svg" alt="Html icon" />
            </span>
            <span className="ml-3">HTML</span>
          </li>
        </Link>

        <Link to={"/CSS"}>
          <li className="flex items-center mb-5 pr-60 py-3 pl-3 bg-[var(--option-bg)] rounded-2xl">
            <span className="bg-[var(--css-background)] p-2 rounded-lg">
              <img src="/images/icon-css.svg" alt="CSS icon" />
            </span>
            <span className="ml-3">CSS</span>
          </li>
        </Link>

        <Link to={"/Javascript"}>
          <li className="flex items-center mb-5 pr-60 py-3 pl-3 bg-[var(--option-bg)] rounded-2xl">
            <span className="bg-[var(--javascript-background)] p-2 rounded-lg">
              <img src="/images/icon-js.svg" alt="Javascript icon" />
            </span>
            <span className="ml-3">Javascript</span>
          </li>
        </Link>

        <Link to={"/Accessibility"}>
          <li className="flex items-center mb-5 pr-60 py-3 pl-3 bg-[var(--option-bg)] rounded-2xl">
            <span className="bg-[var(--accessibility-background)] p-2 rounded-lg">
              <img
                src="/images/icon-accessibility.svg"
                alt="Accessibility icon"
              />
            </span>
            <span className="ml-3">Accessibility</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
