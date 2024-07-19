"use client"

import styled from './HeaderLayout.module.css';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function HeaderLayout() {

  const [ stateScroll, setStateScroll ] = useState(false);
  const [ stateMenu, setStateMenu ] = useState(false);

  const handleOpenMenu = () => {
    setStateMenu(true);
  }

  const handleCloseMenu = () => {
    setStateMenu(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop >= 20) setStateScroll(true);
      else setStateScroll(false);
    })
  }, []);

  return (
    <header 
      className={`${styled['header-layout']} transition-all duration-300 relative ${stateMenu ? 'bg-white' : 'bg-[linear-gradient(360deg,rgba(0,24,56,0)0%,rgba(1,9,20,0.5)100%);]'}`} 
      // style={{ 'background': stateScroll ? 'rgba(255,255,255,.9)' : '' }}
    >
      <div className="w-full h-full max-w-7xl m-auto flex items-center px-4 md:px-8 justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <Image src="/logo.png" width={48} height={48} alt="Logo"></Image>
          </div>
          <h1 
            className="text-[var(--grey-0)] text-base font-medium transition-all"
            style={{ 'color': stateScroll || stateMenu ? 'var(--grey-1000)' : '' }}
          >IE 10589 Puruchuco</h1>
        </div>
        <nav>
          <ul 
            className={`hidden md:flex gap-7 text-[var(--grey-0)] text-base font-medium`}
            style={{ 'color': stateScroll ? 'var(--grey-1000)' : '' }}
          >
            <li className="flex items-center">
              Niveles
              <IoIosArrowDown size={16}/>
            </li>
            <li>
              <Link href="/">Galería</Link>
            </li> 
            <li>
              <Link href="/">Nosotros</Link>
            </li>
            <li>
              <Link href="/">Contacto</Link>
            </li>
          </ul>
          <div className={`md:hidden text-white`}>
            { !stateMenu 
              ? <RxHamburgerMenu size={24} onClick={handleOpenMenu} />  
              : <IoMdClose size={24} onClick={handleCloseMenu} />
            }
          </div>
        </nav>
      </div>
      <div className={`${stateMenu ? 'block' : 'hidden' } absolute w-full h-[calc(100vh-96px)] bg-white`}>
        <h2>Hello world!</h2>
      </div>
    </header>
  )
}