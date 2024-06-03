import React from 'react';
import logo from "../assets/pavanlogo.png"
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10 ' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/pavan-suthar99/' target='_blank'><FaLinkedin /></a>
            <a href='https://github.com/Pavan3411' target='_blank'><FaGithub/></a>
            <a href="https://www.instagram.com/_mr_honest.00?igsh=MWJkeDZxdm12enNnMQ==" target='_blank'><FaInstagram /></a>
            <a href="https://x.com/pavansu88072690?t=w7fSjBRBjQM93bZTu0yUcQ&s=08" target='_blank'><FaSquareXTwitter /> </a>
        </div>
    </nav>
  )
}

export default Navbar;