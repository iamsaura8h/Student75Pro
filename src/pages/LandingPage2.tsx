// import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "./About";
import Calculation from "./Calculation";

function LandingPage2(){
    return(
        <>
        <Navbar />
        <Hero  />
        <About />
        <Calculation />
        <Analytics />
        <Footer />
        </>
    )
}

export default LandingPage2;