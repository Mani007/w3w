import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import ShiftingCountdown from "./components/Shiftingcountdown";
import TiltCard from "./components/TiltCard";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Countdown/> */}
      <ShiftingCountdown/>
      <TiltCard/>
      <Footer/>
  </>
  );
}
