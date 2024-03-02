'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import Image from 'next/image'
// const Example = () => {
//   return (
//     <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
//       <TiltCard />
//     </div>
//   );
// };

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = (props) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-96 w-72  rounded-xl bg-[#F2F5EC]"
    >
      <div
        style={{
          // transform: "translateZ(75px)",
          // transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center  rounded-xl bg-[#DBD2BD] shadow-lg"
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        
        <div className='shadow-lg rounded-lg bg-[#98B4AC] text-white  text-center' key={props.id}>
                <Image
                src={props.imgSrc}
                className='rounded-t-lg'  
                style={{ "width": "100%"}}
                alt={props.name}
                height={150}
                width={250}   
                    
                      />
                <p className='text-xl font-bold'>{props.name}</p> 
                <p>{props.jobtitle}</p>
                <p>{props.company}</p> 
                 
             </div>  
             <div className='flex items-center justify-center'>
             <a
             target="_blank"
        href={props.social}
        type="button"
        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-50 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>
      </div>
             {/* <p className='text-white  text-center'></p> */}
      </div>
    </motion.div>
  );
};

export default TiltCard;