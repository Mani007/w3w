import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {banner,banner1, w3w} from '../assets'
//import {banner2} from 'banner2.png'
function Hero() {
  return (
    <>
    <section className="mt-20 text-gray-600 bg-gradient-to-r  from-[#FC8E9F] via-[#FC72B9] to-[#FCBB78] body-font">
  <div className="container relative mx-auto flex px-5 py-5 items-center justify-center flex-col">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    {/* <Image
      src="/images/opscraftherosection.png"
      width={720}
      height={600}
      alt="Picture of the author"
    /> */}
    <Image
      src={banner1}
      
      sizes='100vw'
      alt="Picture of the author"
    />
   
  <div className=" relative lg:w-2/3 w-full">
        <div className="flex mt-4 justify-items-start">
        {/* <Link href='/'>
        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none  bg-[#C9B46D]  hover:bg-[#8EB5DF] rounded text-lg">Be a sponsor </button>&nbsp;
        </Link> */}
        <a href="https://app.moongate.id/e/web-3-women-summit" target="_blank">

        <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none  bg-[#98B4AC]  hover:bg-[#8EB5DF] rounded text-lg">Register</button>
        </a>
        
      </div>
    </div> 
  </div>
</section>
    </>
  )
}

export default Hero