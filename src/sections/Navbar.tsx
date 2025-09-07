import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { LuBrainCircuit } from 'react-icons/lu'
import { IoClose, IoPerson, IoSchool } from 'react-icons/io5'
import { GoGoal } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='fixed w-64 h-64 flex items-center rounded-l-full *:transition-all top-[calc(50%-8rem)] -right-32 z-50'>
            <button
                className='absolute right-1/2 p-3 rounded-l-full shadow-[0px_0px_4px_4px_rgba(255,255,255,0.25)] hover:scale-100'
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose /> : <TiThMenu />}
            </button>
            <a href='#about' title='About' className={`delay-50 ${isOpen ? 'rotate-70 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`} onClick={() => setIsOpen(false)}>
                <IoPerson className='-rotate-70' />
            </a>
            <a href='#skills' title='Skills' onClick={() => setIsOpen(false)} className={`delay-25 ${isOpen ? 'rotate-35 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <LuBrainCircuit className='-rotate-35' />
            </a>
            <a href='#education' title='Education' onClick={() => setIsOpen(false)} className={`${isOpen ? 'translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <IoSchool/>
            </a>
            <a href='#projects' title='Projects' onClick={() => setIsOpen(false)} className={`delay-25 ${isOpen ? '-rotate-35 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <GoGoal className='rotate-35' />
            </a>
            <a href='#contact' onClick={() => setIsOpen(false)} className={`delay-50 ${isOpen ? '-rotate-70 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <HiOutlineMail className='rotate-70'/>
            </a>
        </div>

    )
}

export default Navbar
