import { FaSquareJs, FaPython, FaReact } from 'react-icons/fa6'
import { TbBrandHtml5, TbBrandCss3, TbBrandNodejs } from 'react-icons/tb';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';

const Skills = () => {
    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around py-2 items-center lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)] lg:rounded-4xl'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Skills</h1>
            <div className='w-4/5 h-9/10 flex flex-wrap justify-around  p-7 xl:gap-x-20 gap-y-5 items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden'>
                <div className='skill-li'>
                    <TbBrandHtml5 className='text-8xl text-orange-700 animate-rotate-in-place' />
                    <span className='text-xl '>HTML</span>
                </div>
                <div className='skill-li'>
                    <TbBrandCss3 className='text-8xl text-blue-500 animate-rotate-in-place' />
                    <span className='text-xl '>CSS</span>
                </div>
                <div className='skill-li'>
                    <FaSquareJs className='text-8xl text-amber-400 animate-rotate-in-place' />
                    <span className='text-xl '>Javascript</span>
                </div>
                <div className='skill-li'>
                    <FaPython className='text-8xl animate-rotate-in-place' />
                    <span className='text-xl '>Python</span>
                </div>
                <div className='skill-li'>
                    <BiLogoMongodb className='text-8xl text-green-600 outline-4 outline-white rounded-full animate-rotate-in-place' />
                    <span className='text-xl '>MongoDB</span>
                </div>
                <div className='skill-li'>
                    <SiExpress className='text-8xl text-black font-bold bg-white rounded-full animate-rotate-in-place' />
                    <span className='text-xl '>Express.js</span>
                </div>
                <div className='skill-li'>
                    <FaReact className='text-8xl text-sky-400 animate-rotate-in-place' />
                    <span className='text-xl '>React</span>
                </div>
                <div className='skill-li'>
                    <TbBrandNodejs className='text-8xl text-lime-700 animate-rotate-in-place' />
                    <span className='text-xl '>Node.js</span>
                </div>
            </div>

        </div>
    )
}

export default Skills
