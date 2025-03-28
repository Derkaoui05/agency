"use client";
import React from "react";
import { Navigation } from "./Navigation";
import { navigationData } from "@/constants/data";
import { Hero } from "../sections/Hero";
// import ZoomParallax from "../ui/zoom-parallax";
const Header = () => {
  return (
    <>
      <Navigation items={navigationData} />
      <Hero />
      {/* <ZoomParallax /> */}
    </>
  );
};

export default Header;
