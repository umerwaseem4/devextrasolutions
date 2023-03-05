import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AOS from "aos";

import "aos/dist/aos.css";
import Services from "@/components/Services";
import Feature from "@/components/Feature";
import Team from "@/components/Team";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Team />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
