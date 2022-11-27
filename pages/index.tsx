import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import ProfilePic from '../public/img/profile-pic.jpg'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
    pageInfo:PageInfo;
    experiences:Experience[];
    skills:Skill[];
    projects:Project[];
    socials: Social[];
};

const Home = ({pageInfo, projects, socials, experiences, skills}: Props) => {

    return (
        <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB07]/80 tracking-wide'>
            <Head>
                <title>{`${pageInfo?.name}\'s - Portfolio`}</title>
            </Head>

            <Header socials={socials} />

            {/* Hero */}
            <section id="hero" className='snap-start'>
                <Hero pageInfo={pageInfo} />
            </section>

            {/* About */}
            <section id="about" className='snap-center'>
                <About pageInfo={pageInfo}/>
            </section>

            {/* Experience */}
            <section id="experience" className='snap-center'>
                <WorkExperience experiences={experiences} />
            </section>

            {/* Skills */}
            <section id="skills" className='snap-start'>
                <Skills skills={skills} />
            </section>
            {/* Projects */}
            <section id="projects" className='snap-start'>
                <Projects projects={projects}/>
            </section>
            {/* Contact Me */}
            <section id="contact" className='snap-start'>
                <ContactMe pageInfo={pageInfo} />
            </section>

            <Link href="#hero">
                <footer className='sticky bottom-5 w-full cursor-pointer flex justify-end items-center'>
                    <div className='mr-5'>
                        <Image src={ProfilePic}
                            height={40} width={40}
                            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 crusor-pointer"
                            alt="Go Up"
                        />

                    </div>
                </footer>
            </Link>
            <section className='h-96 bg-[#F7AB07]'>

            </section>
        </div>

    )
}

export default Home

export const getStaticProps:GetStaticProps = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
        const experiences: Experience[] = await fetchExperiences();
        const projects: Project[] = await fetchProjects();
        const skills: Skill[] = await fetchSkills();
        const socials: Social[] = await fetchSocials();
    
        return {
            props:{
                pageInfo,
                experiences,
                projects,
                skills,
                socials,
            }
        }

}
