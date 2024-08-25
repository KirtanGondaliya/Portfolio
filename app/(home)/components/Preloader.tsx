"use client"

import React, { useEffect } from 'react'
import {preLoaderAnim} from '../Animation/animation'

const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])


  return (
    <div className='preloader h-[100vh] w-[100%] bg-[#000] text-[#fff] fixed top-0 bottom-0 left-0 right-0 z-[55] flex gap-2 items-center justify-center overflow-hidden'>
        <div className="texts-container overflow-hidden font-['Bohme'] flex items-center justify-between h-[70px] w-[550px]  text-[#fff]">
            <span className='text-[2vw]'>Develop</span>
            <span className='text-[2vw]'>Learn</span>
            <span className='text-[2vw]'>Experience</span>
        </div>
    </div>
  )
}

export default Preloader