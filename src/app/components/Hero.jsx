import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { w3w, banner} from '../assets'
function Hero() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container relative mt-4 mx-auto flex px-5 py-5 items-center justify-center flex-col">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    {/* <Image
      src="/images/opscraftherosection.png"
      width={720}
      height={600}
      alt="Picture of the author"
    /> */}
    <Image
      src={banner}
      width={1440}
      height={1070}
      alt="Picture of the author"
    />
    <div className="text-center absolute mt-4  w-full">
      <h1 className="title-font sm:text-3xl  text-3xl md:text-6xl mb-4 font-medium text-gray-900">Enhancing <br /> 20+ different <span className='text-[#00df9a]'>Industries</span></h1>
      
      <div className="flex justify-center">
        <Link href='/'>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-[#7FFFD4] rounded text-lg">Know More</button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero