import { JSX } from "react";
import Button from "./btn";

export default function Hero(): JSX.Element {
  return (
    <div id="home" className="hero-main h-screen relative">
      <div className="absolute h-full w-full flex font-sans">
        <div className="mx-auto mt-10 text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-[400] text-white">
            EclàtNoir
          </h1>
          <p className="font-light text-white">
            Buy the luxury you thought you couldn&#39;t afford.
          </p>
            <Button color="white" padding={2} rounded={false} weight={400} />
        </div>
      </div>
    </div>
  );
}
