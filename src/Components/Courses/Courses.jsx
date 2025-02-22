import React from 'react'
import Slider from "react-slick";
import Img1 from "../../assets/Curriculam_img/Art.png";
import Img2 from "../../assets/Curriculam_img/Computer_Science.png";
import Img3 from "../../assets/Curriculam_img/Humanities.png";
import Img4 from "../../assets/Curriculam_img/Languages.png";
import Img5 from "../../assets/Curriculam_img/Mathematics.png";
import Img6 from "../../assets/Curriculam_img/Science.png";


const CoursesData = [
    {
      id: 1,
      name: "Computer Science",
      text: "Hands-on experience with the latest programming languages and technology.",
      img: Img2,
    },
    {
      id: 2,
      name: "Fine Art",
      text: "Giving wings to the artists who’d like to take it up as a career or just a hobby.",
      img: Img1,
    },
    {
      id: 3,
      name: "Humanities",
      text: "The study of ancient and modern languages, philosophy, history, and more.",
      img: Img3,
    },
    {
      id: 5,
      name: "Science",
      text: "The study that encourages scientific reasoning, discoveries and inventions.",
      img: Img6,
    },
    {
      id: 7,
      name: "Mathematics",
      text: "Understanding the game of numbers and logic to solve real-world problems.",
      img: Img5,
    },
    {
      id:6,
      name:"Languages",
      text: "Learning more modes of communication from different parts of the world.",
      img: Img4,
    },
  ];

const Courses = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center  mb-10  mx-auto ">
          <div>
            <h1 data-aos="fade-up" className="text-7xl font-bold mb-5">
              Curriculam<br />
              Overview 
            </h1>
          </div>
          <div>
            <p data-aos="fade-up" className="text-lg text-gray-700 text-start dark:text-slate-300">
              Our curriculum offers a well-rounded education, focusing on academic excellence, skill development, and holistic growth. With a diverse range of subjects and innovative teaching methods, we foster critical thinking and a love for learning in students, preparing them for success in a changing world.
            </p>
          </div>
        </div>

        {/* Features cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {CoursesData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-orange-800  bg-primary/70 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className=" sm:w-200 h-200"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-lg dark:text-slate-300 text-gray-800">
                        {data.text}
                      </p>
                      <h1 className="text-4xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  {/* <p className="text-black/20  text-xl font-serif absolute top-0 right-0">hii</p> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Courses