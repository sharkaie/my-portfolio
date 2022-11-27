import React from 'react'
import SkillComponent from './SkillComponent'
import {motion} from 'framer-motion'
import { Skill } from '../typings'

type Props = {
    skills:Skill[],
}

const Skills = ({skills}: Props) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}

        className='h-screen flex  relative flex-col text-center  md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-20 md:top-12 uppercase tracking-[18px] text-gray-500 text-2xl'>Skills</h3>

            <h3 className='absolute top-32 md:top-24 px-2  uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill to for current profieciency</h3>
            <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-5 mt-36 md:mt-28 overflow-y-scroll overflow-x-hidden px-4 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB07]/80 tracking-wide h-[65%] md:h-96'>
                {skills.slice(0, skills.length/2).map(skill => (
                    <SkillComponent key={skill._id} skill={skill}/>
                ))}
                {skills.slice(skills.length/2, skills.length).map(skill => (
                    <SkillComponent key={skill._id} directionLeft={true} skill={skill}/>
                ))}
            </div>
        </motion.div>
    )
}

export default Skills