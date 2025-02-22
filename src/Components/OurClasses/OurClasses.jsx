import React from "react";
import Img1 from "../../assets/class_img/Class3.png";
// import Img2 from "../../assets/class_img/Class4.png"
import Img3 from "../../assets/class_img/Class5.png";
import Img4 from "../../assets/class_img/Class8.png";
// import Img5 from "../../assets/class_img/Class9.png"
import Img6 from "../../assets/class_img/Class10.png";
import Img7 from "../../assets/class_img/Class11.png"
import Img8 from "../../assets/class_img/Class12.png";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Class-3",
      description:
        "Rupees-99 Only",
    },
    {
      id: 2,
      img: Img3,
      title: "Class-5",
      description:
        "Rupees-99 Only",
    },
    {
      id: 3,
      img: Img4,
      title: "Class-8",
      description:
        "Rupees-999 Only",
    },
    {
      id: 7,
      img: Img6,
      title: "Class-10",
      description:
        "Rupees-999 Only",
    },
    {
      id: 5,
      img: Img7,
      title: "Class-11",
      description:
        "Rupees-999 Only",
    },
    {
      id: 6,
      img: Img8,
      title: "Class-12",
      description:
        "Rupees-999 Only",
    },
  ];

const OurClasses = ({ handleOrderPopup }) => {
    return (
      <div>
        <div className="container">
          {/* Header section */}
          <div data-aos="fade-up"className="mb-24 mt-10  max-h-[500px] w-full rounded-3xl bg-primary dark:bg-orange-800">
            <div className="justify-center flex items-center pt-2">
              <h1 data-aos="fade-up" className="text-5xl font-bold">
                Featured
              </h1>
            </div>
            <div className="min-h-[100px] mt-5 ml-10 mr-10">
              <p data-aos="fade-up" className="text-lg text-gray-800 dark:text-gray-200">
                Welcome to Prachand Prayash Private Limited! We are a dynamic and forward-thinking organization committed to revolutionizing the education system related to the Uttar Pradesh board. Our mission is to modernize the educational framework by integrating advanced technology and providing high-quality education to students.
              </p>
            </div>
          </div>
          {/* Body section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-orange-600 dark:hover:bg-orange-800 hover:text-white relative shadow-xl duration-300 group max-w-[450px] mb-20 mt-10"
              >
                {/* image section */}
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[400px] rounded-3xl block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                {/* details section */}
                <div className="p-4 text-center mt-10">
                  {/* star rating */}
                  
                  <h1 className="text-xl flex justify-left font-bold ">{data.title}</h1>
                  <p className="text-gray-800 dark:text-gray-200 text-xl group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-700"
                    onClick={handleOrderPopup}
                  >
                    Register Yourself
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default OurClasses