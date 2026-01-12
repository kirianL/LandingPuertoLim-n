import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Accommodation } from "@/components/sections/Accommodation";
import { Restaurant } from "@/components/sections/Restaurant";
import { MeetingRoom } from "@/components/sections/MeetingRoom";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Team = dynamic(() =>
  import("@/components/sections/Team").then((mod) => mod.Team)
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((mod) => mod.Testimonials)
);
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((mod) => mod.FAQ)
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Accommodation />
        <Restaurant />
        <Team />
        <MeetingRoom />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
