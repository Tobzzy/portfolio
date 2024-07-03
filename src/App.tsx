import React from "react";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
