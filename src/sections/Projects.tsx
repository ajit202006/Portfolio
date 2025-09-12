import tictactoeImg from '../assets/TicTacToe.png'
import visualClockImg from '../assets/VisualClock.png'
import todoAppImg from '../assets/TodoApp.png'
import quizAppImg from '../assets/QuizApp.png'
import { useRef } from 'react'
const Projects = () => {
    const ulRef = useRef<HTMLUListElement>(null);
    const allProjects = [
        {
            id: 1,
            pName: 'Tic Tac Toe',
            description: 'This is an application made in react. Using this user can play tic tac toe',
            imgSrc: tictactoeImg,
            imgAlt: 'tic tac toe image'
        },
        {
            id: 2,
            pName: 'Visual Clock',
            description: 'Get a digital clock on your computer that can help you remind task using alarms and can be used as a stopwatch or timer when needed. The design is reponsive and works smoothly on mobile devices.',
            imgSrc: visualClockImg,
            imgAlt: 'Visual Clock image'
        },
        {
            id: 3,
            pName: 'Todo App',
            description: 'Track your daily tasks using this application. Here you can track all you done and undone tasks and add all your task just by simple one click operation. This design is reponsive and works perfectly on all device.',
            imgSrc: todoAppImg,
            imgAlt: 'Todo app image'
        },
        {
            id: 4,
            pName: 'Quizriousity',
            description: 'Improve your knowledge by attempting challenging quizzes created by users like you or test others knowledge by adding your own quizzes in this quiz manager application, Quizriousity.',
            imgSrc: quizAppImg,
            imgAlt: 'Quizriousity image'
        }
    ];

    const projectsList = allProjects.map(project => {
        return (
            <li key={project.id} className='min-w-4/5 md:min-w-32/100 h-10/12 rounded-xl overflow-hidden *:text-center'>
                <img className='w-full h-2/5 object-cover' src={project.imgSrc} alt={project.imgAlt} />
                <div className='w-full h-3/5 px-5 py-2 '>
                    <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>{project.pName}</h4>
                    <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                        {project.description}
                    </p>
                </div>
            </li>
        )
    });

    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around pt-4 items-center lg:rounded-4xl lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)]'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Projects Experiment</h1>
            <ul ref={ulRef} className='w-full md:w-4/5 h-9/10 py-5 flex gap-y-3 md:gap-x-5 px-3 items-center overflow-x-scroll [&::-webkit-scrollbar]:hidden *:shadow-[0px_0px_4px_2px_rgba(255,255,255,0.25)] *:bg-stone-900'>
                {projectsList}
            </ul>
        </div>
    )
}

export default Projects
