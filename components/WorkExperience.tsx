import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
    experiences:Experience[],
}

const WorkExperience = ({experiences}: Props) => {
    return (

        <div className='h-screen flex relative overlflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center' >
            <h3 className='absolute top-20 md:top-12 uppercase tracking-[18px] text-gray-500 text-2xl'>Experience</h3>
            <div className='w-full mx-auto mt-8 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB07]/80'>
                {/* <div className='px-48 h-auto'></div> */}
                {/* ExperienceCard */}
                {experiences?.map(experience => (
                    <ExperienceCard key={experience._id} experience={experience} />
                    ))}
                {/* <div className='px-48 h-auto'></div> */}
            </div>
        </div>
    )
}

export default WorkExperience