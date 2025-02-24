import { JSX } from "react";

export default function Mail(): JSX.Element {
    return (
        <div className="h-[40vh] bg-zinc-900 flex items-center">
            <div className="mx-auto flex flex-col gap-4">
                <h1 className="text-xl md:text-3xl font-thin font-sans">Join Our Mailing List</h1>
                <p className="font-sans font-thin">Be the first to get exclusive discounts straight to your mailbox.</p>
                <input type="email" name="email" id="email" className="outline-none p-2 bg-transparent border border-amber-400 rounded-md" placeholder="Email" />
            </div>
        </div>
    )
}