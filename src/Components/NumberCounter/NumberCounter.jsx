import React from 'react'
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-primary/10 h-[450px] sm:h-[400px] dark:bg-gray-800">
        <div>
            <div className="pt-10 text-center ">
                <h1 className="text-3xl sm:text-6xl font-bold pb-10 ">Learning Begins With Us</h1>
                <h2 className=" text-xl sm:text-2xl font-bold">Champion School at a Glance</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 pl-10 pr-10 mt-10 text-orange-700 dark:text-orange-300">
                <div className="items-center ">
                    <h1 className="text-center text-3xl sm:text-6xl font-bold">
                        <CountUp 
                        start={0} 
                        end={2}
                        duration={2.5}
                        >
                        </CountUp>K+
                    </h1>
                    <p className="text-center pt-3">Current Enrollments</p>
                </div>
                <div>
                    <h1 className="text-center text-3xl sm:text-6xl font-bold">
                        <CountUp 
                        start={0} 
                        end={90}
                        duration={2.5}
                        >
                        </CountUp>+
                    </h1>
                    <p className="text-center pt-3">Qualified Staff</p>
                </div>
                <div>
                    <h1 className="text-center text-3xl sm:text-6xl font-bold">
                        <CountUp 
                        start={0} 
                        end={80}
                        duration={2.5}
                        >
                        </CountUp>+
                    </h1>
                    <p className="text-center pt-3">Clubs & Activities</p>
                </div>
                <div>
                    <h1 className="text-center text-3xl sm:text-6xl font-bold">
                        <CountUp 
                        start={0} 
                        end={100}
                        duration={2.5}
                        >
                        </CountUp>+
                    </h1>
                    <p className="text-center pt-3">Active PTFA Members</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NumberCounter