import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
function Hero() {
  const greenText = "<fullstack/>"
  return (
    <div className='flex flex-wrap h-full '>
      <div className=' w-full sm:w-1/2 my-auto flex justify-start'>
        <p className=' flex flex-col space-y-2'>
          <span className='text-5xl  md:text-6xl font-medium'>Hi, I'm </span>
          <span className='text-5xl md:text-6xl font-medium'>Sagar Sangwan</span>
          <span className='text-2xl text-gray-400'>
            A Passionate <span className="text-green-500">{greenText}</span> developer😜 with one year of experience
          </span>
          <Button variant='green' size='lg' className='mt-4'>Resume</Button>
        </p>
      </div>
      <div className=' w-full sm:w-1/2 mx-auto my-auto flex justify-center'>
        <Image src="/images/robot.png"
          width={300}
          height={300}
          alt='png'
        />
      </div>

    </div>
  )
}

export default Hero