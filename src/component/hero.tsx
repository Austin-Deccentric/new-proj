import React from 'react'
import { FaPlay } from "react-icons/fa";

const hero = () => {
  return (
  
    <div className="grid md:grid-cols-2 gap-4 bg-[#49BBBD] w-full h-[30rem] md:h-[50rem] [clip-path:ellipse(120%_100%_at_50%_0%)]">
      <div className="text-white px-6 lg:px-32 flex flex-col justify-center gap-6">

        <p className="font-bold text-md md:text-4xl"> 
          <span className="text-[#F48C06]">Studying</span> Online is now much easier
        </p>

        <small className="text-xl">
          TOTC is an interesting platform that will teach you in a more interactive way
        </small>

        <div className="flex items-center gap-4">
          <button className="btn-ghost-totc">Join for free</button>
          <div className="flex items-center gap-6">
             <div className="bg-white rounded-full size-12 flex items-center justify-center">
              <FaPlay className="text-[#49BBBD]" />
             </div>
             <button className="text-[#252641]">Watch how it works</button>
          </div>
        </div>

      </div>
      <div className="flex justify-center items-center">
        <img src="/images/hero-lady.png" alt="Hero Image" />
      </div>
    </div>
  )
}

export default hero
