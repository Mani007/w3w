import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import ShiftingCountdown from "./components/Shiftingcountdown";
import TiltCard from "./components/TiltCard";
import VerticalAccordion from "./components/VerticalAccordion";
import Speakers from "./components/Speakers";
import Afterparty from "./components/Afterparty";
import Partners from "./components/Partners";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Countdown/> */}
      <ShiftingCountdown/>
      <VerticalAccordion/>
      {/* <TiltCard/> */}
      <Speakers/>
      <Partners/>
      <Sponsors/>
      <Afterparty/>
      <Footer/>
  </>
  );
}
