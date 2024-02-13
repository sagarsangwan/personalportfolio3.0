import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
function Hero() {
  const greenText = "<fullstack/>"
  return (
    <div className='flex flex-wrap h-full '>
      <div className=' w-full h-min sm:w-1/2 my-10 md:my-auto flex justify-start'>
        <p className=' flex flex-col space-y-2'>
          <span className='text-2xl  md:text-5xl font-medium'>Hi, I'm </span>
          <span className='text-3xl md:text-6xl font-medium'>Sagar Sangwan</span>
          <span className=' text-gray-400'>
            A Passionate <span className="text-green-500">{greenText}</span> developer😜 with one year of experience
          </span>
          <span>
            <Button variant='green' size='lg' className='mt-4'>Resume</Button>
          </span>
        </p>
      </div>
      <div className=' sm:w-1/2 mx-auto my-auto flex justify-center '>
        <div className='relative h-52 w-60 md:h-96 md:w-full xl:h-96 xl:w-full my-auto mb-36' >
          <Image src="/images/robot.png"
            // width={300}
            // height={300}
            fill={true}
            alt='png'

            loading='lazy'
          />
        </div>
      </div>

    </div>
  )
}

export default Hero
