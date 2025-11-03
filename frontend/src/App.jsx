import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Updates from "./components/LatestUpdates/Updates";
import VolunteerAuth from "../src/pages/VolunteerAuth.jsx";
import DonationForm from "../src/pages/DonationForm.jsx";

const HomePage = ({ setPlayState }) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section id="hero"><Hero /></section>
      <div className="container">
        <section id="updates">
          <Title subTitle="Updates" title="Latest Updates" />
          <Updates />
        </section>
        <section id="about"><About setPlayState={setPlayState} /></section>
        <section id="gallery"><Title subTitle="Gallery" title="Photos" /><Gallery /></section>
        <section id="services"><Title subTitle="OUR SERVICES" title="What We Offer" /><Services /></section>
        <section id="team"><Title subTitle="Team" title="Our Core Members" /><Team /></section>
        <section id="contact"><Title subTitle="Contact Us" title="Get in Touch" /><Contact /></section>
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage setPlayState={setPlayState} />} />
        <Route path="/volunteer" element={<VolunteerAuth />} />
        <Route path="/donate" element={<DonationForm />} />
      </Routes>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </Router>
  );
};

export default App;
