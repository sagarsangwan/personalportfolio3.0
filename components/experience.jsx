import React from 'react'
import { Button } from './ui/button'
import { IoLocationOutline } from "react-icons/io5";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLink } from "react-icons/fa6";




function Experience() {
    return (
        <div className='justify-center flex pb-32'>
            <div className=' '>
                <div className="mb-3 flex justify-center ">
                    <Button variant='secondary' size='sm' className='px-4'>Aboutme</Button>
                </div>
                <div className=' '>
                    <p className=' flex justify-center text-xl  md:text-3xl text-green-500 mb-3'>
                        Here is a quick summary of my experience
                    </p>

                </div>
                <div className='flex justify-center'>
                    <Accordion type="single" collapsible className='border border-gray-400 px-3 rounded-[13px]'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="flex justify-between border-b ">

                                <div className='text-xs'> Full stack web developer @teachoo</div>
                                <div className='text-xs ps-9'> April2022-2023 </div>


                            </AccordionTrigger>
                            <AccordionContent className='pt-2'>
                                <div className='flex text-gray-400 '>
                                    <div className='flex '>
                                        <IoLocationOutline />
                                        <span className='text-xs ps-1'>New Delhi, India</span>
                                    </div>
                                    <div className='flex ps-6'>
                                        <FaLink />
                                        <span className='text-xs ps-1 text-green-500'> <a href="https://www.teachoo.com">Teachoo</a> </span>
                                    </div>
                                </div>
                                <p className='mt-3 text-gray-400'>Worked closely with designers and management team to develop a new product from scratch</p>
                                <div className='flex text-xs mt-3 text-green-500'>
                                    <span className=''>Python/Django</span>
                                    <span className='ps-3'>Html/CSS/Bootstrap </span>
                                    <span className='ps-3'>AWS(s3, Ses)</span>
                                    <span className='ps-3'>Heroku</span>
                                </div>



                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Experience
