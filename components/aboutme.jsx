import Image from "next/image"

function Aboutme() {
    return (
        <div className='grid grid-cols-6 gap-3 '>
            <div className='bg-blue-100 col-span-2'>
                <Image height={200} width={280} alt="" src={'/images/myPhoto.png'} />
            </div>
            <div className='col-span-4'>

            </div>
        </div>
    )
}

export default Aboutme
