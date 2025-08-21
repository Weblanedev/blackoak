import React from "react";
import Hero from "../components/Hero";
import Thesis from "../components/Thesis";
import Sectors from "../components/Sectors";
import Portfolio from "../components/Portfolio";
import Team from "../components/Team";
import PitchIntro from "../components/PitchIntro";

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <hr className="section-divider" />
      <Thesis />
      <hr className="section-divider" />
      <Sectors />
      {/* <Portfolio /> */}
      {/* <Team /> */}
      <hr className="section-divider" />
      <PitchIntro />
    </div>
  );
}
