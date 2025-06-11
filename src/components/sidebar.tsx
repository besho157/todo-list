'use client';

import { FaRegCheckCircle, FaCircleNotch } from 'react-icons/fa';
import { TfiThought } from "react-icons/tfi";
import { GrAddCircle, GrInbox } from "react-icons/gr";
import { FiLogOut } from 'react-icons/fi';
import { Menu, X } from 'lucide-react';

import { useRef, useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
    const menuRef = useRef<HTMLDivElement>(null);
    const Router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    // فتح تلقائي في الشاشات الكبيرة
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        Router.replace('/login');
    };

    const handleProfileClick = () => {
        Router.push("/user-profile");
    };

    return (
        <div className="relative">
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border rounded-md shadow"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md border-r border-gray-200 z-40 transform transition-transform duration-300 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0`}
            >
                <div className="flex flex-col h-full">
                    <div ref={menuRef} className="grid flex-wrap items-center cursor-pointer border-b border-gray-300 px-8 py-3.5">
                        <div className='flex gap-6 items-center'>
                            <img
                                alt="tania andrew"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xgCzY-QSnwbl4PK03rs3cdwlAnDA13ZIAQ&s"
                                className="inline-block h-10 w-10 cursor-pointer rounded-full object-cover"
                                onClick={handleProfileClick}
                            />
                            <h1 onClick={handleProfileClick} className='text-blue-600 text-2xl'>user</h1>
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
                            <Link href="/all-tasks" className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600 px-8 py-3.5 transition-all hover:bg-slate-100">
                                <GrInbox className="w-[20px] h-[20px] mr-3" />
                                <span>Inbox</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Completed-todos" className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600 px-8 py-3.5 transition-all hover:bg-slate-100">
                                <FaRegCheckCircle className="w-[20px] h-[20px] mr-3" />
                                <span>Completed</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/UnCompleted-todos" className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600 px-8 py-3.5 transition-all hover:bg-slate-100">
                                <FaCircleNotch className="w-[20px] h-[20px] mr-3" />
                                <span>Uncompleted</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/thoughts" className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600 px-8 py-3.5 transition-all hover:bg-slate-100">
                                <TfiThought className="w-[20px] h-[20px] mr-3" />
                                <span>Thoughts</span>
                            </Link>
                        </li>
                    </ul>

                    <div>
                        <hr className="my-2 border-slate-200" />
                        <Link onClick={handleLogout} href="/" className="flex items-center text-sm text-slate-800 cursor-pointer rounded-md p-3 mb-20 hover:bg-slate-100">
                            <FiLogOut className="w-5 h-5 text-slate-400" />
                            <p className="ml-2 font-medium">Log out</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
