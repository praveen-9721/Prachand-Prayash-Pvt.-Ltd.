import React from "react";
import MainImg from "../../assets/Co_curriculam/Child.png"
import { FaDotCircle } from "react-icons/fa";

const CoCurriculam = () => {
    return (
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* image section */}
            <div data-aos="zoom-in" className=" bg-orange-400 rounded-3xl rotate-45 -z[8]">
              <img
                src={MainImg}
                alt=""
                className="max-w-[550px] h-[550px] w-full mx-auto rounded-2xl object-cover"
              />
            </div>
  
            {/* text details section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Our Co-curricular Activities
              </h1>
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaDotCircle className="text-4xl h-6 w-6 shadow-sm p-1.5 rounded-full bg-orange-700 dark:bg-orange-500" />
                  <h1 className="text-2xl font-bold">Athletics</h1>
                </div>
                <div data-aos="fade-up" className="ml-10 justify-start">
                  <p>Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up.</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaDotCircle className="text-4xl h-6 w-6 shadow-sm p-1.5 rounded-full bg-orange-700 dark:bg-orange-500" />
                  <h1 className="text-2xl font-bold">In-house Publications</h1>
                </div>
                <div data-aos="fade-up" className="ml-10 justify-start">
                  <p>Prachand Prayash Pvt Ltd offers comprehensive online courses in Hindi medium for UP Board students from grades 1 to 12, all developed in-house from our dedicated studio.</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaDotCircle className="text-4xl h-6 w-6 shadow-sm p-1.5 rounded-full bg-orange-700 dark:bg-orange-500" />
                  <h1 className="text-2xl font-bold">Performing Arts & Music</h1>
                </div>
                <div data-aos="fade-up" className="ml-10 justify-start">
                    <p>With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CoCurriculam