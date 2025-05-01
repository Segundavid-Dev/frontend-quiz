import "./App.css";

import Welcome from "./components/Welcome";
import Option from "./components/Option";

function App() {
  return (
    <div className="container mx-auto py-32 px-20">
      <div className="flex justify-between">
        <Welcome />
        <Option />
      </div>
    </div>
  );
}

export default App;
