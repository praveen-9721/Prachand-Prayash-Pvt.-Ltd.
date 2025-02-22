import React from "react";
import AOS from "aos"
import "aos/dist/aos.css";
// import { useEffect, useState } from "react";
import NavbarSection from "./Components/NavbarSection/NavbarSection";
import Popup from "./Components/PopUpView/Popup";
import HeroSection from "./Components/HeroSection/HeroSection";
import NumberCounter from "./Components/NumberCounter/NumberCounter";
import BackPage from "./Components/BackPage/BackPage";
import Courses from "./Components/Courses/Courses";
import CoCurriculam from "./Components/CoCurriculam/CoCurriculam";
import OurClasses from "./Components/OurClasses/OurClasses";
import Testimonial from "./Components/Testimonial/Testimonial";
import SubscribeNow from "./Components/SubscribeNow/SubscribeNow";
import FooterSection from "./Components/FooterSection/FooterSection";


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavbarSection handleOrderPopup={handleOrderPopup} />
      <HeroSection handleOrderPopup={handleOrderPopup} />
      <NumberCounter />
      <BackPage />
      <Courses />
      <CoCurriculam />
      <OurClasses handleOrderPopup={handleOrderPopup} />
      <Testimonial />
      <SubscribeNow />
      <FooterSection />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
