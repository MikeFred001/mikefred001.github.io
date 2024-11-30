"use client";

import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Divider from "./components/common/Divider";
import FooterContacts from "./components/FooterContacts";
import { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { useActiveSection } from "./hooks/useActiveSection";

export default function Home() {
  const { y } = useWindowScroll();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [hideFooter, setHideFooter] = useState(false);
  const [miniHeader, setMiniHeader] = useState(false);
  const [refs, setRefs] = useState<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setRefs([
      homeRef.current,
      aboutRef.current,
      projectsRef.current,
      contactRef.current,
    ]);
  }, []);

  const activeSection = useActiveSection(refs);

  useEffect(() => {
    if (y === 0) {
      setHideFooter(false);
    } else if (y > 0 && !hideFooter) {
      setHideFooter(true);
    }
  }, [y, hideFooter]);

  useEffect(() => {
    if (y < 425) {
      setMiniHeader(false);
    } else if (y > 425 && !miniHeader) {
      setMiniHeader(true);
    }
  }, [y, miniHeader]);

  return (
    <div className="HOME font-bebas">
      <Header
        activeSection={activeSection}
        miniHeader={miniHeader}
        className={"hidden lg:flex"}
      />
      <Header
        activeSection={activeSection}
        miniHeader={true}
        className={"flex lg:hidden"}
      />
      <Intro ref={homeRef} />
      <Divider />
      <About ref={aboutRef} />
      <Divider reversed />
      <Projects ref={projectsRef} />
      <Divider />
      <Contact ref={contactRef} />
      <FooterContacts hideFooter={hideFooter} />
    </div>
  );
}
