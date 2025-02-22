// import React from "react";
import Logo from "../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";
import { IoInformationSharp } from "react-icons/io5";
import { FaJoint } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
//   FaLinkedin,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const FooterSection = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-2 ">
          {/* company details */}
          <div className="py-8 px-4">
            <img src={Logo} alt="LOGO" className="w-[80px] h-[90px] max-w-[80px] pb-3" />
            <h1 className="sm:text-3xl text-xl text-orange-400 font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              About us
            </h1>
            <p className="text-gray-100">
            Welcome to Prachand Prayash Private Limited! We are a dynamic and forward-thinking organization committed to revolutionizing the education system related to the Uttar Pradesh board. Our mission is to modernize the educational framework by integrating advanced technology and providing high-quality education to students.
            </p>
          </div>

          {/* Contact us */}
          <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-2xl text-orange-400 text-xl font-bold sm:text-left text-justify mb-3">
                  Contact us
                </h1>
                <div className="flex items-center gap-3 mt-5 ">
                  <IoCall className="shadow-sm bg-orange-900" />
                  <a href="tel:+91 088699 48735"> +91 088699 48735 </a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <CiMail className=" bg-orange-900" />
                  <a href="mailto:prachandprayashpvtltd3271@gmail.com?body=My custom mail body">prachandprayashpvtltd3271@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaLocationDot className=" bg-orange-900" />
                  <a href="https://www.google.com/maps/dir/25.31328,83.0078976/prachand+prayash/@26.1023936,80.6585186,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x414cbe6b7e9ef9cf:0xbb5f67a561505ecd!2m2!1d80.9480084!2d26.9036245?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">55, Suncity Enclave, Lucknow, 226021</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-2 mt-5">
                    Follow us
                  </h1>
                </div>
                <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/prachandprayash/">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://www.facebook.com/people/Prachand-Prayash/100094269398171/">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.youtube.com/channel/UCeICVPgo5IwjumQaA-ymZPQ">
                  <IoLogoYoutube className="text-3xl" />
                </a>
                <a href="https://t.me/prachandprayash">
                  <FaTelegram className="text-3xl" />
                </a>
              </div>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-2xl text-orange-400 text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <div className="flex items-center gap-3 mt-5">
                  <FaHome className=" bg-orange-900" />
                  <a href="#Home"> Home </a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <SiAcademia className=" bg-orange-900" />
                  <a href="#Home"> Academics </a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <RiPagesLine className=" bg-orange-900" />
                  <a href="#Home"> Courses </a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoInformationSharp className=" bg-orange-900" />
                  <a href="#Home"> About us </a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaJoint className=" bg-orange-900" />
                  <a href="#Home"> Career </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-800 flex items-center justify-center text-sm">
        <p>
          <strong>
            Copyright © 2025 
            <a href="" className="text-blue-400">  Prachand Prayash Pvt. Ltd. </a>
            | Designed and Hosted by
            <a href="https://praveen-9721.github.io/Personal-Portfolio/" className="text-blue-400"> Praveen Kumar</a>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
