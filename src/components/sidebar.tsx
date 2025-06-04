'use client';
import { FaRegCheckCircle, FaCircleNotch } from 'react-icons/fa';
import { GrAddCircle, GrInbox } from "react-icons/gr";
import { useRef } from "react";
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const menuRef = useRef<HTMLDivElement>(null);
    const Router = useRouter();


    const handleLogout = () => {
        localStorage.removeItem('isLogin');  
        Router.replace('/login');          
    };
    
    const handleProfileClick = () => {
        Router.push("/user-profile");
    };
    return (
        <div className="relative   flex  column">
            <nav className={`fixed transition-all duration-600 bg-white shadow-md text-white top-0 left-0 border-r border-gray-200 h-screen w-64 '
                }`} >
                <div className=" flex flex-col h-full">

                    <div ref={menuRef} className="grid flex-wrap items-center cursor-pointer border-b border-gray-300 px-8 py-3.5">
                        <div className='flex gap-6 items-center '>
                            <div>

                                <img
                                    alt="tania andrew"
                                   src="https://i.pravatar.cc/300"
                                    className=" inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
                                    onClick={handleProfileClick}
                                />
                            </div>

                            <h1 onClick={handleProfileClick} className='text-blue-600  text-2xl' >user</h1>

                        </div>
                    </div>
                    <ul className="space-y-2 my-8 flex-1">
                        <li>
                            <Link href="/todo-list" className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600 px-8 py-3.5 transition-all hover:bg-slate-100">
                                <GrAddCircle className="w-[20px] h-[20px] mr-3" />
                                <span>Add task</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="/all-todos"
                                className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600   px-8 py-3.5 transition-all hover:bg-slate-100">

                                <GrInbox className="w-[20px] h-[20px] mr-3" />
                                <span>Inbox</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Completed-todos"
                                className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600   px-8 py-3.5 transition-all hover:bg-slate-100">

                                <FaRegCheckCircle className="w-[20px] h-[20px] mr-3" />
                                <span>Completed</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/UnCompleted-todos"
                                className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600   px-8 py-3.5 transition-all hover:bg-slate-100">

                                < FaCircleNotch className="w-[20px] h-[20px] mr-3" />
                                <span>Uncompleted</span>
                            </Link>
                        </li>
                    </ul>
                    <div style={{

                    }}>

                        <hr className="my-2 border-slate-200" />
                        <Link onClick={handleLogout} href="/" className="flex items-center text-sm text-slate-800 cursor-pointer rounded-md p-3 mb-20 hover:bg-slate-100">
                            <FiLogOut className="w-5 h-5 text-slate-400" />
                            <p className="ml-2 font-medium">Loge out</p>
                        </Link>
                    </div>

                </div>
            </nav >

        </div >
    );
}
