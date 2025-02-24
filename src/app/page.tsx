import Collection from "@/components/collection";
import Hero from "@/components/hero";
import NavBar from "@/components/nav";
import Testimonial from "@/components/review";
import Customization from "@/components/customization";
import Mail from "@/components/mail";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      <NavBar />
      <Hero />
      <Collection />
      <Customization />
      <Testimonial />
      <Mail />
      <Footer />
    </div>
  );
}
