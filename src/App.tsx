import React from "react";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";

export const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
    </>
  );
};
