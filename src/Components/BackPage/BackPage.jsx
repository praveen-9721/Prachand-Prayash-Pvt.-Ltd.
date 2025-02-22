import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const BackPage = () => {
  return (
    <div>
      <div>
        <section className="relative bg-[#FF6918] bg-opacity-99 overflow-visible w-full min-h-[320px]">
          <div className="absolute inset-0 bg-[#FF3800] bg-opacity-18 bg-[url('https://prachandprayash.com/wp-content/uploads/2024/03/school-admission-3350-x-1150-px-1-2.png')]">
          
          </div>
          <div className="relative z-10 pt-10 pl-20">
            {/* Your content here */}
            <FaQuoteLeft className="text-3xl sm:text-5xl text-orange-100" />
            <h1 className="text-orange-100 text-center pt-5 text-2xl sm:text-4xl font-extrabold pl-10 pr-10">
            "Empowering Students, Enriching Communities: Together, Let's Build a World of Infinite Possibilities."
            </h1>
            <h2 className="text-2xl sm:text-3xl text-orange-100 font-extrabold text-end pr-10 pt-9">-Team Manager</h2>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BackPage