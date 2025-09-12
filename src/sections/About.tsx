const About = () => {
    return (
        <div className='flex items-center flex-col lg:flex-row justify-center w-full h-full lg:w-4/5 lg:h-4/5 lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)] lg:rounded-4xl'>
            <div className='w-1/2 md:w-1/4 gap-2 md:h-full flex flex-col items-center justify-center'>
                <img className='w-full rounded-full shadow-[0px_0px_7px_5px_rgba(255,255,255,0.25)]' src='/profile.png' alt='profile image' />
                <a href='https://drive.google.com/file/d/1it12O-a69f01JpCV32g0opMQqO2VpOWO/view?usp=drive_link' className='p-1.5 font-bold rounded-md animate-beat text-xl w-auto bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300' target='_blank'>My Resume</a>
            </div>
            <div className='max-w-4/6 min-w-4/6 p-6 flex flex-col items-center justify-between  overflow-hidden animate-fade-right gap-7 min-h-1/5 overflow-y-scroll [&::-webkit-scrollbar]:hidden'>
                <h1 className='w-max text-xl md:text-4xl font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>AJIT VISHWAKARMA</h1>
                <p className='text-xl bg-clip-text bg-linear-to-tr text-center text-transparent from-slate-500 to-white animate-fade-up'>
                    I'm a trainee and BCA student with a strong interest in web development, currently working with the MERN stack (MongoDB, Express.js, React, and Node.js). I enjoy building clean, responsive, and efficient web applications that solve real problems. Through hands-on projects, I've gained experience in both frontend and backend development, and I'm comfortable working in team environments that follow Agile practices like daily standups and sprint planning.
                </p>
            </div>
        </div>
    )
}

export default About
