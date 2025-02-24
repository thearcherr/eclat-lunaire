import { JSX } from "react";

export default function Testimonial(): JSX.Element {
  return (
    <div
      className="my-14 h-[50vh] p-2 bg-black"
      id="reviews"
    >
      <div className="test-main h-full w-10/12 mx-auto rounded-md relative">
        <div className="absolute inset-0 h-full w-full bg-zinc-800 bg-opacity-60 flex items-center">
          <div className="mx-auto">
            <h2 className="text-lg font-thin italic">
            &ldquo;The epitome of luxury and sophistication. Each fragrance tells a
              unique story&#39;&ldquo;
            </h2>
            <p className="mt-4 font-sans font-thin text-center">Rosetta Luke</p>
            <p className="mt-1 font-sans font-thin text-center">
              Editor at Vogue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
