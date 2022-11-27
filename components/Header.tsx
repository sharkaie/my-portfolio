import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';
type Props = {
    socials:Social[]
}

const Header = ({socials}: Props) => {
    return (
        <header className='sticky top-0 flex items-start md:items-center justify-between max-w-7xl mx-auto p-5 z-10'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id} 
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent" />
                ))}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor="gray"
                    bgColor="transparent"
                />

                <Link href="#contact" className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</Link>
            </motion.div>
        </header>
    )
}

export default Header