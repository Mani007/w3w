'use client'
import React from 'react'
import {speakers,} from '../constants'
import Image from 'next/image'
import dog from '../assets/dogtest.jpg'
import TiltCard from './TiltCard'
function Speakers() {
  return (
    <>
    <div id='speakers' className='w-full text-center bg-[#F79489]'>
        <p className='py-8 text-white text-center text-4xl font-bold'>Our Speakers</p>
    <div className='container   mx-auto py-12 px-8'>
        <div className='grid items-center justify-center lg:grid-cols-3 gap-4 gap-y-10'>
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