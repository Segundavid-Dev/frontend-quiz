import { Link } from "react-router-dom";

export default function Option() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/HTML"}>HTML</Link>
        </li>
        <li>
          <Link to={"/CSS"}>CSS</Link>
        </li>
        <li>
          <Link to={"/Javascript"}>Javascript</Link>
        </li>
        <li>
          <Link to={"/Accessibility"}>Accessibility</Link>
        </li>
      </ul>
    </div>
  );
}
