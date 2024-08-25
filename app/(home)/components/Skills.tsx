'use client'
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiReact,SiJavascript,SiPython,SiNodedotjs,SiHtml5,SiMongodb,SiMongoose, SiCplusplus,SiRedux, SiNextdotjs, SiExpress, SiTailwindcss } from "react-icons/si";

const Skills = () => {

    const skills=[
        {
            text:'React',
            Icon:SiReact,
        },
        {
            text:'JavaScript',
            Icon: SiJavascript,
        },
        {
            text:'HTML/CSS',
            Icon: SiHtml5,
        },
        {
            text:'Node.js',
            Icon: SiNodedotjs,
        },
        {
            text:'MongoDB',
            Icon: SiMongodb,
        },
        {
            text:'Python(Basic)',
            Icon: SiPython,
        },
        {
            text:'Mongoose',
            Icon: SiMongoose,
        },{
            text:'C++',
            Icon:SiCplusplus
        },{
            text:'Redux',
            Icon: SiRedux
        },{
            text:'Next.js(Basic)',
            Icon:SiNextdotjs
        },{
            text:'Express.js(Basic)',
            Icon: SiExpress
        },{
            text:'TailwindCss',
            Icon:SiTailwindcss
        }
]

  return (
    <div className='max-w-5xl mx-auto px-8 z-[2]'>
        <Title text='Skills 🤹' className='flex flex-col items-center justify-center -rotate-6'/>
        <HoverEffect items={skills} />
    </div>
  )
}


export default Skills