import React from 'react'
import {motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'
type Props = {
  projects:Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} className='h-screen flex  relative flex-col text-center  md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 md:top-12 uppercase tracking-[18px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB07]/80'>
          {projects.map((project,index)=>(
            <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44'>
              <motion.img
              initial={{
                y:-200
              }}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y:0}}

              viewport={{once: true}}
              src={urlFor(project?.projectImage).url()}
              className='h-40 md:h-56'
              alt="image of logo" />
              <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-2xl font-semibold text-center'> <span className='underline decoration-[#F7AB0A]/50'>Project {index+1} of {projects.length}</span> : <a className='hover:text-[#F7AB0A]/95' href={project?.linkToBuild}>{project?.title}</a></h4>
                <div className='flex items-center justify-center space-x-2'>
                {project?.technologies.map(technology => (
                  <div key={technology._id} className='h-8 w-8 rounded-full overflow-hidden'>
                    <Image height={40} width={40} src={urlFor(technology.image).url()} alt="technology" />
                  </div>
                  ))}
                  </div>
                <p className='text-base text-center md:text-left'>{project.summary}</p>
              </div>
              </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'>

        </div>
    </motion.div>
  )
}

export default Projects