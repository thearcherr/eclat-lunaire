import Link from "next/link";
import {JSX} from "react";

export default function NavBar(): JSX.Element {
    return (
        <div className="sticky top-0 z-50 h-12 flex items-center bg-[#1d1105] font-sans font-thin">
            <div className="flex-1">
                <h3 className="text-xl md:text-2xl mx-4">EclàtNoir</h3>
            </div>
            <div className="flex flex-row gap-4 mx-4 text-[#ffe5cc]">
                <Link href="#">Home</Link>
                <Link href="#">Collection</Link>
                <Link href="#">Customize</Link>
                <Link href="#">Reviews</Link>
                <Link href="#">Contact</Link>
            </div>
        </div>
    )
}