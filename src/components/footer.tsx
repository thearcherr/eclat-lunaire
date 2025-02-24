import Link from "next/link";
import { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="mt-10">
            <div className="h-[40vh] grid grid-cols-3">
                <div>
                <h4 className="text-xl font-sans font-thin mx-4">
                    ECLAT LUNAIRE <br /> PERFUME
                </h4>
                <p className="mt-4 text-sm opacity-75 mx-4">Operating since 21st December, 1921</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold">Links</h3>
                    <Link href="#home" className="font-thin">Home</Link>
                    <Link href="#customization" className="font-thin">Customize</Link>
                    <Link href="#collection" className="font-thin">Collection</Link>
                    <Link href="#reviews" className="font-thin">Reviews</Link>
                    <Link href="#home" className="font-thin">Contact</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold">Company</h3>
                    <p className="font-thin">About us</p>
                    <p className="font-thin">Sustainability</p>
                    <p className="font-thin">Press</p>
                </div>
            </div>
        </footer>
    )
}