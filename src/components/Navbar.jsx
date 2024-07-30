import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [position, setPosition] = useState({
        left: 60,
        width: 150,
        opacity: 1
    })

  return (
    <div className='pt-8'>
        <ul className='relative flex w-fit rounded-md border border-stroke-color bg-button-color text-white p-1 mx-auto'>
        <Navs>Home</Navs>
        <Navs>Projects</Navs>
        <Navs>Contact</Navs>

        <Block position={position}/>
    </ul>
    </div>
  )
}

const Navs = ({children}) => {
    return (
        <li className='relative z-10 block cursor-pointer px-3 py-2 uppercase text-xs text-white '>{children}</li>
    )
}

const Block = ({position}) => {
    return (
        <motion.li className='absolute z-0 h-8 w-36 rounded bg-[#383838]' />
    )
}

export default Navbar