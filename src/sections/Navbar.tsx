import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { LuBrainCircuit } from 'react-icons/lu'
import { IoClose, IoPerson } from 'react-icons/io5'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='fixed w-64 h-64 flex items-center rounded-l-full *:transition-all top-[calc(50%-8rem)] -right-32 z-50'>
            <button
                className='absolute right-1/2 p-3 rounded-l-full shadow-[0px_0px_4px_4px_rgba(255,255,255,0.25)]'
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose /> : <TiThMenu />}
            </button>
            <a href='#about' className={`${isOpen ? 'rotate-75 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`} onClick={() => setIsOpen(false)}>
                    <IoPerson className='-rotate-75' />
            </a>
{/* className={`${isOpen ? 'rotate-75 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`} */}

            <a href='#skills' onClick={() => setIsOpen(false)} className={`delay-25 ${isOpen ? 'rotate-45 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <LuBrainCircuit className='-rotate-45'/>
            </a>
            <button onClick={() => setIsOpen(false)} className={`delay-50  ${isOpen ? 'rotate-15 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <LuBrainCircuit />
            </button>
            <button onClick={() => setIsOpen(false)} className={`delay-75 ${isOpen ? '-rotate-15 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <LuBrainCircuit />
            </button>
            <button onClick={() => setIsOpen(false)} className={`delay-100 ${isOpen ? '-rotate-45 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <LuBrainCircuit />
            </button>
            <button onClick={() => setIsOpen(false)} className={`delay-125 ${isOpen ? '-rotate-75 translate-x-3' : 'rotate-0 translate-x-36'} nav-btn`}>
                <LuBrainCircuit />
            </button>

        </div>

    )
}

export default Navbar
