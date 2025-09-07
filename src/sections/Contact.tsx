import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
const Contact = () => {
    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around pt-4 items-center lg:rounded-4xl lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)]'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Contact</h1>
            <div className='w-9/10 h-9/10 flex flex-col justify-around items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden'>
                <div className='flex flex-col md:flex-row w-1/2 h-24 items-center justify-center gap-x-3 md:gap-x-6 hover:[&>a]:underline'>
                    <VscGithub className='w-24 h-full transition-colors'/>
                    <a className='text-white text-2xl md:text-4xl' target='_blank' href='https://github.com/ajit202006'>My Github</a>
                </div>
                <div className='flex flex-col md:flex-row w-1/2 h-24 items-center justify-center gap-x-3 md:gap-x-6 hover:[&>a]:underline'>
                    <FaLinkedin className='w-24 h-full transition-colors'/>
                    <a className='text-white text-2xl md:text-4xl' target='_blank' href='https://linkedin.com/in/ajit-vishwa-karma/'>My LinkedIn</a>
                </div>
                <div className='flex flex-col md:flex-row w-1/2 h-24 items-center justify-center gap-x-3 md:gap-x-6'>
                    <SiGmail className='w-24 h-full transition-colors'/>
                    <a className='text-white md:text-2xl' target='_blank' >ajitvishwakarma202006@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
