import React from "react";
import Image1 from "../../assets/hero_img/Img1.png";
import Image11 from "../../assets/hero_img/Img2.png";
import Image2 from "../../assets/hero_img/Img3.png";
import Image3 from "../../assets/hero_img/Img4.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
  },
  {
    id: 2,
    img: Image2,
  },
  {
    id: 3,
    img: Image3,
  },
  {
    id: 4,
    img: Image11,
  },
];
const HeroSection = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden w-auto min-h-[100px] sm:min-h-[200px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[320px] w-[270px] sm:h-[680px] sm:w-[700px] bg-orange-700 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-0 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div 
            key={data.id}
              // data-aos="zoom-in"
              // data-aos-once="true"
              // className="relative z-10"
              className="grid grid-cols-1 sm:grid-cols-2 order-1 sm:order-2 pt-0">
                <img
                  src={data.img}
                  alt=""
                  // className="w-full object-contain mx-auto"
                  // className="w-[900px] h-[800px] sm:h-[950px] sm:w-[950px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection