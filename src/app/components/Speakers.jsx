'use client'
import React from 'react'
import {speakers,} from '../constants'
import Image from 'next/image'
import dog from '../assets/dogtest.jpg'
function Speakers() {
  return (
    <>
    <div className='container mx-auto py-36 px-8'>
        <div className='grid lg:grid-col-3'>
            {speakers.map((speaker,index) =>
            (
            
             <div key={speaker.id}>
                <Image
                src={speaker.imgSrc}
                
                alt={speaker.name}
                height={150}
                width={150}       
                      />

             </div>   
            ) 
            )
            
            }
        </div>
        <Image
                src={dog}
                alt="abc"
                height={150}
                width={150}       
                         />

    </div>
    </>
  )
}

export default Speakers