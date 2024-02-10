import React from 'react'
import { Button } from './ui/button'

function Experience() {
    return (
        <div className='justify-center flex '>
            <div className=' '>
                <div className="mb-3 flex justify-center ">
                    <Button variant='secondary' size='sm' className='px-4'>Aboutme</Button>
                </div>
                <div className=' '>
                    <p className=' flex justify-center text-xl  md:text-3xl text-green-500 mb-3'>
                        Here is a quick summary of my experience
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Experience
