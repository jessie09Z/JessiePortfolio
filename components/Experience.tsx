"use client"
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/Moving-borders'

const Experience = () => {
  return (
    <div className='py-20' id="projects">
    <h1 className='heading'>
      Jessie&apos;s {" "}
      <span className='text-purple'>work experience</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
<div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
{workExperience.map((experience=>(
    <Button key={experience.id}
    duration={Math.floor(Math.random() *5000)+5000}
    borderRadius='1.75 rem'
    className='flex-1 text-white-100 border-neutral-200 dark:border-slate-200 rounded-lg'>
        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap:2'>
            <img src={experience.thumbnail} alt={experience.thumbnail}
            className=' md:w-20 w-16'/>
            <div className='lg:ms-5'>
                <h1 className='text-start text-xl md:text-2xl font-bold'> {experience.title}</h1>
                <p className='text-start text-white-100 text-md mt-3 font-semibold '>{experience.desc}</p>
            </div>
        </div>
    </Button>
)))}

</div>
        </div>
        </div>
  )
}

export default Experience
