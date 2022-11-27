import React from 'react'
import {motion} from 'framer-motion'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

// commwent
type Props = {
    pageInfo: PageInfo
}
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

const ContactMe = ({pageInfo}: Props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:vedantby@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`
  }

    return (
        <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} className='h-screen flex  relative flex-col text-center  md:text-left xl:flex-row max-w-7xl px-10 min-h-screen justify-evenly mx-auto items-center'>
            <h3 className='absolute top-16 md:top-12 uppercase tracking-[18px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col md:space-y-10'>
                <h4 className='text-lg md:text-4xl font-semibold text-center mt-8 mb-3 md:my-0'>I have got just what you need.&nbsp;
                    <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s Talk</span>
                </h4>

                <div className='space-y-2 text-sm md:text-base'>
                    <div className='flex items-center justify-center space-x-5 '>
                        <PhoneIcon className='text-[#F7AB0A] h-4 w-4 md:h-7 md:w-7 animate-pulse '/>
                        <p>{pageInfo?.phoneNumber}</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-4 w-4 md:h-7 md:w-7 animate-pulse '/>
                        <p>{pageInfo?.email}</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <MapPinIcon className='text-[#F7AB0A] h-4 w-4 md:h-7 md:w-7 animate-pulse '/>
                        <p>{pageInfo?.address}</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto py-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex md:space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput w-full mb-2 md:mb-0' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput w-full' type="email" />
                    </div>
                    <input {...register('subject')} className='contactInput' type="text"  placeholder='Subject'/>
                    <textarea {...register('message')} className='contactInput'  placeholder='Message'/>
                    <button type="submit" className='bg-[#F7AB0A] py-3  px-10 rounded-md text-black font-semibold  '>
                    Submit
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default ContactMe