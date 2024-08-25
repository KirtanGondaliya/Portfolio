import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Scroll = () => {
  return (
    <div>
        <VelocityScroll
      text="→ Projects → Skills → Experience " 
      default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-lg dark:text-zinc-700 md:text-7xl md:leading-[5rem]"
    />

    </div>
  )
}

export default Scroll