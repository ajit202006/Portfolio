import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='fixed flex w-10 h-10 md:w-full md:h-16 bg-slate-900 justify-around items-center md:px-2 md:py-0.5  z-10'>
            <TiThMenu className='md:hidden scale-100' onClick={() => {setIsOpen(!isOpen)}}/>
            <div className='w-auto h-full hidden md:flex items-center gap-2.5'>
                <img className='h-11/12 rounded-full' src='/profile.png' alt='Profile image' />
                <h1>Ajit Vishwakarma</h1>
            </div>
            <ul className={`flex flex-col ${isOpen?'scale-100':'scale-0'} md:scale-100 transition-[scale] absolute left-15 *:w-20 *:bg-slate-900 *:text-center md:*:w-auto md:relative md:flex-row w-1/2 text-md lg:text-xl h-full justify-around items-center *:hover:bg-slate-800 md:*:py-1 md:*:px-6 md:*:rounded-full`}>
                <li><a onClick={() => {setIsOpen(!isOpen)}} href='#about'>About</a></li>
                <li><a onClick={() => {setIsOpen(!isOpen)}} href='#skills'>Skills</a></li>
                <li><a onClick={() => {setIsOpen(!isOpen)}} href='#projects'>Projects</a></li>
                <li><a onClick={() => {setIsOpen(!isOpen)}} href='#education'>Education</a></li>
                <li><a onClick={() => {setIsOpen(!isOpen)}} href='#contact'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar
