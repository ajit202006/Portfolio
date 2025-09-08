import tictactoeImg from '../assets/TicTacToe.png'
import visualClockImg from '../assets/VisualClock.png'
import todoAppImg from '../assets/TodoApp.png'
import quizAppImg from '../assets/QuizApp.png'
const Projects = () => {
    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around pt-4 items-center lg:rounded-4xl lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)]'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Projects</h1>
            <div className='w-full md:w-4/5 h-9/10 py-5 flex flex-wrap gap-y-3 md:gap-6 md:gap-y-5 justify-center items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden *:shadow-[0px_0px_4px_2px_rgba(255,255,255,0.25)] *:bg-stone-900'>
                <div className='w-4/5 md:w-3/10 h-10/12 rounded-xl overflow-clip *:text-center'>
                    <img className='w-full h-2/5 object-cover' src={tictactoeImg} alt='Tic-tac-toe image' />
                    <div className='w-full h-3/5 px-5 py-2 '>
                        <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>Tic Tac Toe</h4>
                        <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>This is an application made in react. Using this user can play tic tac toe</p>
                    </div>
                </div>
                <div className='w-4/5 md:w-3/10 h-10/12 rounded-xl overflow-clip *:text-center'>
                    <img className='w-full h-2/5 object-cover' src={visualClockImg} alt='Visual clock image' />
                    <div className='w-full h-3/5 px-5 py-2 '>
                        <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>Visual Clock</h4>
                        <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                            Get a digital clock on your computer that can help you remind task using alarms and can be used as a stopwatch or timer when needed. The design is reponsive and works smoothly on mobile devices.
                        </p>
                    </div>
                </div>
                <div className='w-4/5 md:w-3/10 h-10/12 rounded-xl overflow-clip *:text-center'>
                    <img className='w-full h-2/5 object-cover' src={todoAppImg} alt='Todo app image' />
                    <div className='w-full h-3/5 px-5 py-2 '>
                        <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>Todo app </h4>
                        <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                            Track your daily tasks using this application. Here you can track all you done and undone tasks and add all your task just by simple one click operation. This design is reponsive and works perfectly on all device.
                        </p>
                    </div>
                </div>
                <div className='w-4/5 md:w-3/10 h-10/12 rounded-xl overflow-clip *:text-center'>
                    <img className='w-full h-2/5 object-cover' src={quizAppImg} alt='Quizriousity image' />
                    <div className='w-full h-3/5 px-5 py-2 '>
                        <h4 className='text-2xl bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300 bg-clip-text text-transparent font-bold'>Quizriousity</h4>
                        <p className='h-4/5 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                            Improve your knowledge by attempting challenging quizzes created by users like you or test others knowledge by adding your own quizzes in this quiz manager application, Quizriousity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
