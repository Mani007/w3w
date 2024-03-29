import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import ShiftingCountdown from "./components/ShiftingCountdown";
import TiltCard from "./components/TiltCard";
import VerticalAccordion from "./components/VerticalAccordion";
import Speakers from "./components/Speakers";
import Afterparty from "./components/Afterparty";
import Partners from "./components/Partners";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import Venue from "./components/Venue";
import Openparty from "./components/Openparty";
import Livevideo from "./components/Livevideo";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Countdown/> */}
      {/* <ShiftingCountdown/> */}
      <Livevideo/>
      <About/>
      <VerticalAccordion/>
      <Venue/>
      <Openparty/>
      {/* <TiltCard/> */}
      <Speakers/>
      <Sponsors/>
      <Partners/>
      <Afterparty/>
      <Footer/>
  </>
  );
}
