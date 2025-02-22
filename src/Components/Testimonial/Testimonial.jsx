import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/Testimonials_img/Amity.png";
import Img2 from "../../assets/Testimonials_img/Sarthak.png";
import Img3 from "../../assets/Testimonials_img/Riti.png";
import Img4 from "../../assets/Testimonials_img/Shubham.png";

const TestimonialData = [
  {
    id: 1,
    name: "Amity Verma",
    text: "With the help of Prachand Prayash Pvt Ltd I can secure 95% marks in class 12 from UP Board thats why I can win the next level of Competition.",
    img: Img1,
  },
  {
    id: 2,
    name: "Sarthak Kumar",
    text: "Thanks a lot to Prachand Prayash Pvt Ltd Organization to providing me best classes with new pattern for UP Board So I can get 92.6% in class 10th",
    img: Img2,
  },
  {
    id: 3,
    name: "Riti Singhal",
    text: "मेरे इस सफलता के पीछे मेरे माता पिता गुरु और प्रचंड प्रयाश प्र० लि० संस्था का पूरा योगदान है जिसकी मदद से मैं उ० प० बोर्ड के 10वी कक्षा में 94% अंक पा सकी हूँ। ",
    img: Img3,
  },
  {
    id: 5,
    name: "Shubham Singh",
    text: "I recommended to all the students blew 12th class to participate in Prachand Prayash Pvt Ltd to boost your score and be motivated.",
    img: Img4,
  },
];

const Testimonial = () => {
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
          slidesToScroll: 1,
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
        <div className="text-center bg-orange-600 rounded-full mb-10 max-w-[600px] max-h-[100px] min-h-[70px] mx-auto ">
          
          <h1 data-aos="fade-up" className="text-3xl font-bold pt-3">
            Testimonials and Rewviews
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-amber-800  bg-primary/40 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-25 h-25"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                      <p className="text-md dark:text-slate-300 text-gray-800">
                        {data.text}
                      </p>
                      
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
