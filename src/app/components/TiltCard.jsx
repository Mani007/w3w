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
                className='rounded-t-lg '  
                style={{ "width": "100%",  "borderRadius": "100%"}}
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
        href={props.social}
        target="_blank"
       
        type="button"
        className="m-1 h-9 w-9  uppercase leading-normal text-[#344760] transition duration-150 ease-in-out hover:bg-[#80B1C8] hover:bg-opacity-50 focus:outline-none focus:ring-0"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>
      </div>
             {/* <p className='text-white  text-center'></p> */}
      </div>
    </motion.div>
  );
};

export default TiltCard;