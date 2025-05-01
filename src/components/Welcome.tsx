import Option from "./Option";

export default function Welcome() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-6xl">
          Welcome to the <br />{" "}
          <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="text-[14px] italic text-gray-400 mt-5">
          Pick a subject to get started.
        </p>
      </div>
      <div>
        <Option />
      </div>
    </div>
  );
}
