"use client";

import { AboutMe } from "../components/Intro";
import NavBar from "../components/NavBar";
import { TimeLine } from "../components/Timeline";
import {useRef, useEffect, useState} from "react";
import ScrollToTop from "../components/ToTop";

export default function AboutPage() {    
      return (
    <main className="px-20 py-16">
      <NavBar />
      <AboutMe />
      <TimeLine />
      <ScrollToTop />
    </main>
  );
}
