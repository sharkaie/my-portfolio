import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    directionLeft?:boolean
    skill:Skill
}

const SkillComponent = ({directionLeft, skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x:directionLeft?-50:50
        }}
        viewport={{once:true}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        src={urlFor(skill.image).url()}
        className='rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-20 xl:h-20 fliter group-hover:grayscale transition duration-300'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 duration-300 ease-in-out rounded-full group-hover:bg-white w-14 h-14 xl:w-20 xl:h-20 z-0'>
            <div className='flex items-center justify-center h-full '>
                <p className='text-xl font-bold text-black opacity-100%'>{skill?.progress}</p>
            </div>
        </div>
    </div>
  )
}

export default SkillComponent