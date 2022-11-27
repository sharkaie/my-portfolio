import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '../typings'
import Image from 'next/image'
import { urlFor } from '../sanity'

type Props = {
    experience:Experience
}

const ExperienceCard = ({experience}: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-96 md:mt-12 mt-0 md:w-[450px] xl:w-[600px]  snap-center bg-[#292929] p-10 opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img 
            initial={{
                y:-100,
                opacity: 0
            }}
            transition={{ duration:1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className='w-20 h-20 rounded-full xl:w-[120px] x:h-[120px] object-cover object-center' 
            src="https://i.pinimg.com/originals/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg" 
            alt="Logo" />

            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light '>{experience?.jobTitle}</h4>
                <p className='font-bold'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies?.map(technology => (
                        <div key={technology._id} className='h-8 w-8 rounded-full overflow-hidden'>
                            {/* Tech used */}
                            <Image height={32} width={32} src={urlFor(technology.image).url()} alt="texhnology" />
                        </div>
                    ))}                    
                </div>
                <p className='uppercase py-5 text-gray-300 text-sm'>
                    {new Date(experience.dateStarted).toDateString()}{' - '}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()
                    }
                </p>
                <ul className='list-disc space-y-4 ml-5 text-base h-24 md:h-52 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB07]/80 '>
                    {experience.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard