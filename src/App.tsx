import "./App.css";

import Welcome from "./components/Welcome";

import Accessibility from "./components/Quiz/Accessibility";
import Javascript from "./components/Quiz/Javascript";
import CSS from "./components/Quiz/CSS";
import HTML from "./components/Quiz/HTML";
import Error from "./components/Error";
import Finished from "./components/Quiz/FInished";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto pt-20 pb-30 px-20 max-sm:px-5 max-sm:pb-5">
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/finished" element={<Finished />} />
            <Route path="/HTML" element={<HTML />} />
            <Route path="/CSS" element={<CSS />} />
            <Route path="/Javascript" element={<Javascript />} />
            <Route path="/Accessibility" element={<Accessibility />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
