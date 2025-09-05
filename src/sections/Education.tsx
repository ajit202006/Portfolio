const Education = () => {
    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around pt-4 items-center lg:rounded-4xl lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)]'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Education</h1>
            <div className='w-9/10 h-9/10 flex flex-wrap justify-around  p-7 xl:gap-x-20 gap-y-5 items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden *:shadow-[0px_0px_7px_4px_rgba(255,255,255,0.25)]'>
                <div className={`w-95/100 h-full md:w-4/5 md:h-95/100 lg:w-1/4 lg:h-4/5 relative py-2 bg-[url('assets/10th.png')] bg-cover bg-no-repeat bg-center rounded-2xl flex items-end justify-center`} >
                    <span className='text-xl font-bold text-indigo-600'>High School</span>
                </div>
                <div className={`w-95/100 h-full md:w-4/5 md:h-95/100 lg:w-1/4 lg:h-4/5 relative py-2 bg-[url('assets/12th.png')] bg-cover bg-no-repeat bg-center rounded-2xl flex items-end justify-center`} >
                    <span className='text-xl font-bold text-indigo-600'>Intermediate</span>
                </div>
                <div className={`relative w-95/100 h-full md:w-4/5 md:h-95/100 lg:w-1/4 lg:h-4/5 py-2 bg-[url('assets/BCA.png')] bg-cover bg-no-repeat bg-center rounded-2xl flex items-end justify-center`} >
                    <span className='text-xl md:text-2xl absolute bottom-1/2 opacity-45'>Pursuing...</span>
                    <span className='text-xl font-bold text-indigo-600'>BCA</span>
                </div>
            </div>
        </div>
    )
}

export default Education
