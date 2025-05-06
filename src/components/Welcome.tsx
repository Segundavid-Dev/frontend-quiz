import Option from "./Option";

export default function Welcome() {
  return (
    <div className="flex justify-between max-sm:flex-col">
      <div>
        <h1 className="text-6xl w-[40vw] max-sm:text-5xl max-sm:w-[100vw]">
          Welcome to the
          <span className="font-bold"> Frontend Quiz!</span>
        </h1>
        <p className="text-[14px] italic text-gray-400 mt-5 max-sm:pb-10">
          Pick a subject to get started.
        </p>
      </div>
      <div className="w-full">
        <Option />
      </div>
    </div>
  );
}
