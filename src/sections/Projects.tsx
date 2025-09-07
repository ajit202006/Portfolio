import tictactoeImg from '../assets/TicTacToe.png'
import visualClockImg from '../assets/VisualClock.png'
import todoAppImg from '../assets/TodoApp.png'
import quizAppImg from '../assets/QuizApp.png'
const Projects = () => {
    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around pt-4 items-center lg:rounded-4xl lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)]'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Projects</h1>
            <div className='w-full md:w-3/5 h-9/10 flex flex-wrap gap-x-[calc(25%)] gap-y-7 justify-center items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden *:shadow-[0px_0px_7px_4px_rgba(255,255,255,0.25)]'>
                <div className='relative overflow-clip grid place-items-center w-4/5 md:w-48 h-48 rounded-xl'>
                    <img className="w-full h-full object-cover rounded-xl object-left blur-sm" src={tictactoeImg} alt="TicTacToe Image" />
                    <a href='https://github.com/ajit202006/SinQlarity-Learning/tree/main/Projects/TicTacToe/tic-tac-toe' target='_blank' className='absolute text-center text-gray-600 hover:text-slate-700 rounded-xl text-xl font-black hover:underline'>TicTacToe<br />Github link</a>
                </div>
                <div className='relative overflow-clip grid place-items-center w-4/5 md:w-48 h-48 rounded-xl'>
                    <img className="w-full h-full object-cover object-left blur-sm" src={visualClockImg} alt="Visual Clock Image" />
                    <a href='https://github.com/ajit202006/SinQlarity-Learning/tree/main/Projects/VisualClock' target='_blank' className='absolute text-center text-gray-600 hover:text-slate-700 rounded-xl text-xl font-black hover:underline'>Visual Clock<br />Github link</a>
                </div>
                <div className='relative overflow-clip grid place-items-center w-4/5 md:w-48 h-48 rounded-xl'>
                    <img className="w-full h-full object-cover object-left blur-sm" src={todoAppImg} alt="Todo App Image" />
                    <a href='https://github.com/ajit202006/SinQlarity-Learning/tree/main/Projects/MERN%20Todo%20App' target='_blank' className='absolute text-center text-gray-600 hover:text-slate-700 rounded-xl text-xl font-black hover:underline'>Todo App<br />Github link</a>
                </div>
                <div className='relative overflow-clip grid place-items-center w-4/5 md:w-48 h-48 rounded-xl'>
                    <img className="w-full h-full object-cover object-left blur-sm" src={quizAppImg} alt="TicTacToe Image" />
                    <a href='https://github.com/ajit202006/Quizriousity' target='_blank' className='absolute text-center text-gray-600 hover:text-slate-700 rounded-xl text-xl font-black hover:underline'>Quiz App<br />Github link</a>
                </div>
            </div>
        </div>
    )
}

export default Projects
