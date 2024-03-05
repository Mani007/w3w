'use client'
import React from 'react'
import Image from 'next/image'
function Venue() {
  return (
    <>
    <div id='venue' className='w-full h-full bg-[#DBD2BD]'>
    <section  className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full text-center mb-20 flex-wrap">
      <h1 className="sm:text-4xl text-4xl px-10 font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Venue <br />CASA DE PEDRA</h1>
      
      <p className="lg:pl-6 lg:w-2/3 mx-auto  text-white text-bold leading-relaxed text-2xl">Av. Dr. Arlindo Vicente, <br /> 1950-079 <br />Lisboa</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
        <Image
        src="/venue/six.png"
        width={500}
        height={300}
        style={{ "width": "100%"}}
        alt="Picture of the author"
      />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image
        src="/venue/five.png"
        width={501}
        height={301}
        style={{ "width": "100%"}}
        alt="Picture of the author"
      />
        </div>
        <div className="md:p-2 p-1 w-full">
        <Image
        src="/venue/two.jpg"
        width={600}
        height={360}
        style={{ "width": "100%"}}
        alt="Picture of the author"
      />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
        <Image
        src="/venue/four.jpg"
        width={601}
        height={361}
        style={{ "width": "100%"}}
        alt="Picture of the author"
      />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image
        src="/venue/three.jpg"
        width={502}
        height={302}
        style={{ "width": "100%"}}
        alt="Picture of the author"
      />
        </div>
        <div className="md:p-2 p-1 w-1/2">
        <Image
        src="/venue/one.jpg"
        width={503}
        height={303}
        style={{ "width": "100%"}}
        alt="Picture of the author"
      />
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default Venue