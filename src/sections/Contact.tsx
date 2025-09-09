import { getDatabase, ref, set } from 'firebase/database';
import firebaseApp from '../store/firebase';
import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import React, { useRef } from 'react';

const Contact = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const validateInput = () => {
        if (!nameRef.current?.value || nameRef.current?.value.length < 4) {
            alert('Name should not be less than 4 characters.');
            alert();
        } else if (!emailRef.current?.value || emailRef.current?.value.length < 4) {
            alert('Email should not be empty.');
        } else if (!messageRef.current?.value || messageRef.current?.value.length < 10) {
            alert('Message should contain at least 10 characters.');
        } else {
            return true;
        }
        return false;
    }
    const sendData = (event: React.FormEvent) => {
        if (validateInput()) {
            event.preventDefault();
            const db = getDatabase(firebaseApp);
            set(ref(db, 'messages'), {
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                message: messageRef.current?.value
            });
            alert('Message sent.');
        }


    }
    return (
        <div className='bg-[#050616] w-full h-full xl:w-4/5 xl:h-4/5 flex flex-col justify-around pt-4 items-center lg:rounded-4xl lg:shadow-[0px_0px_56px_5px_rgba(255,255,255,0.25)]'>
            <h1 className='w-max text-4xl text-center font-bold bg-linear-45/shorter from-indigo-500 from-5% via-cyan-400 via-20%% to-emerald-300  bg-clip-text text-transparent'>Contact</h1>
            <div className='w-full h-9/10 flex flex-col gap-y-7 md:flex-row justify-around items-center overflow-y-auto [&::-webkit-scrollbar]:hidden'>
                <div className='w-4/5 md:w-2/5 h-full flex flex-col items-center justify-center gap-7 *:flex *:flex-col md:*:flex-row *:items-center *:gap-2 *:text-xl md:*:text-2xl *:hover:*:underline'>
                    <p>You can see my work and connect with me on the following patterns :</p>
                    <a href='https://github.com/ajit202006/' target='_blank'>
                        <VscGithub className='text-3xl' />
                        <span>My Github</span>
                    </a>
                    <a href='https://www.linkedin.com/in/ajit-vishwa-karma/' target='_blank'>
                        <FaLinkedin className='text-3xl' />
                        <span>My Linkedin</span>
                    </a>
                    <a className='hover:*:no-underline'>
                        <SiGmail className='text-3xl' />
                        <span>ajitvishwakarma202006@gmail.com</span>
                    </a>
                </div>
                <hr className='md:hidden w-full' />
                <form onSubmit={(e) => { sendData(e) }} className='w-4/5 md:w-2/5 h-full flex flex-col items-center justify-center gap-y-2 text-xl'>
                    <h3 className='text-2xl font-bold mb-2'>Message me here :</h3>
                    <label htmlFor='name'>Your Name :</label>
                    <input ref={nameRef} className='bg-slate-500 outline-0 py-1 px-1 rounded-lg w-4/5' type='text' id='name' placeholder='Enter your name...' autoComplete='off'/>
                    <label htmlFor='e-mail'>Your Email :</label>
                    <input ref={emailRef} className='bg-slate-500 outline-0 py-1 px-1 rounded-lg w-4/5' type='email' id='e-mail' placeholder='Enter your email...' autoComplete='off'/>
                    <label htmlFor='message'>Your message :</label>
                    <textarea ref={messageRef} className='resize-none outline-0 bg-slate-500 py-1 px-1 rounded-lg w-4/5' id='message' placeholder='Enter your message...'></textarea>
                    <input className='bg-slate-700 outline-0 hover:bg-slate-600 active:bg-slate-900 py-1 px-1.5 rounded-full' type='submit' />
                </form>
            </div>
        </div>
    )
}

export default Contact
