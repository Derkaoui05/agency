"use client";
import React from "react";
import { Navigation } from "./Navigation";
import { navigationData } from "@/constants/data";
import { Hero } from "../sections/Hero";
const Header = () => {
  return (
    <>
      <Navigation items={navigationData} />
      <Hero />
    </>
  );
};

export default Header;
