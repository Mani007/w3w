'use client'
import React from 'react'
import {speakers,} from '../constants'
import Image from 'next/image'
import dog from '../assets/dogtest.jpg'
import TiltCard from './TiltCard'
function Speakers() {
  return (
    <>
    <div id='speakers' className='w-full text-center items-center justify-center bg-gradient-to-r  from-[#FC8E9F] via-[#FC72B9] to-[#FCBB78]'>
        <p className='py-8 text-white text-center text-4xl font-bold'>Our Speakers</p>
    <div className='container w-full content-center mx-auto py-12 px-10'>
        <div className='grid content-center justify-items-center w-full items-center justify-center lg:grid-cols-4 gap-4 gap-y-10'>
            {speakers.map((speaker,index) =>
            (
            
            //  <div className='shadow-lg rounded-lg bg-[#98B4AC] text-white  text-center' key={speaker.id}>
            //     <Image
            //     src={speaker.imgSrc}
            //     className='rounded-t-lg'  
            //     style={{ "width": "100%"}}
            //     alt={speaker.name}
            //     height={150}
            //     width={250}   
                    
            //           />
            //     <p>{speaker.name}</p> 
            //     <p>{speaker.jobtitle}</p>
            //     <p>{speaker.company}</p> 
            //      <p>{speaker.social}</p>
            //  </div>
            <div key={index}> 
            
            <TiltCard  id={speaker.id} imgSrc={speaker.imgSrc} name={speaker.name}  jobtitle={speaker.jobtitle} company={speaker.company} social={speaker.social} />
            </div>   
            ) 
            )
            
            }
        </div>
        

    </div>
    </div>
    </>
  )
}

export default Speakers