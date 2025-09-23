const Education = () => {
    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around pt-4 items-center lg:rounded-4xl lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)]'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Education</h1>
            <div className='w-full md:w-4/5 h-9/10 py-5 flex flex-wrap gap-y-3 md:gap-6 md:gap-y-5 justify-center items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden *:shadow-[0px_0px_4px_2px_rgba(255,255,255,0.25)] *:bg-stone-900'>
                <div className='w-4/5 md:w-3/10 h-10/12 rounded-xl overflow-clip *:text-center'>
                    <img className='w-full h-1/2 object-contain' src='/iimt.png' alt='Todo app image' />
                    <div className='w-full h-1/2 px-5 py-2 '>
                        <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>BCA</h4>
                        <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                            Pursuing BCA from IIMT University.
                        </p>
                    </div>
                </div>
                <div className='w-4/5 md:w-3/10 h-10/12 rounded-xl overflow-clip *:text-center'>
                    <img className='w-full h-1/2 object-contain' src='/cbse.png' alt='Visual clock image' />
                    <div className='w-full h-1/2 px-5 py-2 '>
                        <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>Intermediate</h4>
                        <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                            Completed intermediate with physics,chemistry and maths as main subjects from a government school affiliated with CBSE.
                        </p>
                    </div>
                </div>
                <div className='w-4/5 md:w-3/10 h-10/12 rounded-xl overflow-clip *:text-center'>
                    <img className='w-full h-1/2 object-contain' src='/cbse.png' alt='Tic-tac-toe image' />
                    <div className='w-full h-1/2 px-5 py-2 '>
                        <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>High School</h4>
                        <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                            Completed my high school from government school affiliated with CBSE.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
