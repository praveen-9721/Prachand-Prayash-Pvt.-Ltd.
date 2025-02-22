import React from "react";

const SubscribeNow = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-1 bg-orange-500 rounded-t-3xl dark:bg-orange-600 text-white "
    >
      <div className="container  py-10">
        <div className="space-y-6 max-w-full mx-auto pb-5">
          <h1 className="text-2xl !text-center sm:text-left sm:text-5xl font-bold">
          Wish to know more about admissions and updates?
          <br />
          
          </h1>
          <br />
          <h1 className="text-2xl !text-center sm:text-left sm:text-5xl font-bold">Subscribe now!</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 space-y-3 max-w-[850px] mx-auto justify-center items-center">
          <div>
          <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 rounded-sm"
            />
          </div>
          <div className="pl-20 mt-[-2px] ">
            <button
              data-aos="fade-up"
              className="min-h-[50px] bg-orange-100 hover:scale-105 duration-200 text-black py-1 px-10 rounded-sm group-hover:bg-red-500 group-hover:text-orange-900">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNow;
