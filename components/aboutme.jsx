
import { Card, CardContent, } from './ui/card'
import Image from 'next/image'
function Aboutme() {
    const Skills = [
        {

            "title": "Python",
            "thumbnailUrl": "/images/python.png"
        },
        {


            "title": "Django",
            "thumbnailUrl": "/images/django.png"
        },
        {


            "title": "Github",
            "thumbnailUrl": "/images/github.png"
        },
        {


            "title": "React",
            "thumbnailUrl": "/images/reactJS.png"
        },
        {


            "title": "tailwinsCSS",
            "thumbnailUrl": "/images/tailwindCSS.png"
        },
        {


            "title": "Bootstrao",
            "thumbnailUrl": "/images/bootstrap.png"
        },
        {


            "title": "JavaScript",
            "thumbnailUrl": "/images/javascript.png"
        },
        {


            "title": "Heroku",
            "thumbnailUrl": "/images/heroku.png"
        },

    ]
    return (<div className='flex gap-3 mb-10 justify-center flex-wrap' >
        {
            Skills.map((value, idx) => {
                return (
                    <Card key={idx} >
                        <CardContent className="px-8 py-4 justify-center flex flex-col">
                            <Image width={40} className='mx-auto' height={40} alt='' src={value.thumbnailUrl} />
                            <p className='justify-center flex'>{value.title}</p>
                        </CardContent>
                    </Card>)
            })
        }
    </div>
    )
}

export default Aboutme

