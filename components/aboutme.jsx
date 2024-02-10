import Image from "next/image"
import { Button } from "./ui/button"

function Aboutme() {
    return (
        <div className='grid grid-cols-6 gap-3 '>
            <div className=' my-auto mx-auto col-span-5  md:col-span-2 '>
                <Image height={200} width={280} alt="" src={'/images/profile.jpg'} />
            </div>
            <div className='col-span-5  md:col-span-4 '>
                <div className=' '>
                    <div className="mb-3 flex justify-center md:justify-start">
                        <Button variant='secondary' size='sm' className='px-4'>Aboutme</Button>
                    </div>
                    <div>
                        <p className=' flex flex-col space-y-2 text-xl  md:text-3xl text-green-500 mb-3'>
                            Trying to be a fullstack developer😜
                        </p>
                        <p className="text-gray-400">
                            Hi there 👋 I am Sagar. I don't know what I am doing, but I love python 🐍. I love to make complex things simple and joy to use. My interest in web development started back in mid 2020 when I decided to develop my portfolio sagarsangwan and results are I became familiar with <span className="text-green-500"> HTML, CSS and Python(Flask) as Backend</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
