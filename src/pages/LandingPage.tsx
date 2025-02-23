// import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "./About";
import Calculation from "./Calculation";
import Resources from "./Resources";

function LandingPage(){
    return(
        <>
        <Navbar />
        <Hero  />
        <About />
        <Calculation />
        <Analytics />
        <div className="hidden md:block">
            <Resources />
        </div>
        <Footer />
        </>
    )
}

export default LandingPage;