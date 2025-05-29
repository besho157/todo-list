'use client';
import { FaChevronRight, FaRegCheckCircle, FaCircleNotch } from 'react-icons/fa';
import { HiOutlineXMark } from "react-icons/hi2";import { GrAddCircle, GrSearch, GrInbox } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import { FiUser, FiEdit, FiMail, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                    setOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
    };

    return (
        <div className="relative  flex">
            <nav className={`fixed transition-all duration-600 bg-white shadow-md text-white top-0 left-0 border-r border-gray-200 h-screen ${isOpen ? 'w-64' : 'w-0 overflow-hidden'
                }`} >
                <div className=" flex flex-col h-full">

                    <div ref={menuRef} className="grid flex-wrap items-center cursor-pointer border-b border-gray-300 px-8 py-3.5">
                        <div className='flex justify-around  '>
                            <div>

                                <img
                                    alt="tania andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
                                    className=" inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
                                    onClick={() => setOpen(!open)}
                                />
                            </div>

                            <h1  onClick={() => setOpen(!open)} className='text-blue-600 m-auto' >user</h1>
                            <div className='m-auto'>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-50 m-auto text-gray-600"
                                    onClick={() => setOpen(!open)}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>



                        {open && (
                            <ul
                                role="menu"
                                className="contents  z-10 right-0 mt-2 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none"
                            >
                                <li className="flex items-center text-sm text-slate-800 cursor-pointer rounded-md p-3 hover:bg-slate-100">
                                    <FiUser className="w-5 h-5 text-slate-400" />
                                    <p className="ml-2 font-medium">My Profile</p>
                                </li>
                                <li className="flex items-center text-sm text-slate-800 cursor-pointer rounded-md p-3 hover:bg-slate-100">
                                    <FiEdit className="w-5 h-5 text-slate-400" />
                                    <p className="ml-2 font-medium">Edit Profile</p>
                                </li>
                                <li className="flex items-center text-sm text-slate-800 cursor-pointer rounded-md p-3 hover:bg-slate-100">
                                    <FiMail className="w-5 h-5 text-slate-400" />
                                    <p className="ml-2 font-medium">Inbox</p>
                                </li>
                                <li className="flex items-center text-sm text-slate-800 cursor-pointer rounded-md p-3 hover:bg-slate-100">
                                    <FiHelpCircle className="w-5 h-5 text-slate-400" />
                                    <p className="ml-2 font-medium">Help</p>
                                </li>
                                <hr className="my-2 border-slate-200" />
                                <Link href="/" className="flex items-center text-sm text-slate-800 cursor-pointer rounded-md p-3 hover:bg-slate-100">
                                    <FiLogOut className="w-5 h-5 text-slate-400" />
                                    <p className="ml-2 font-medium">Loge out</p>
                                </Link>
                            </ul>
                        )}

                    </div>
                    <ul className="space-y-2 my-8 flex-1">
                        <li>
                            <Link href="/todo-list" className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600 px-8 py-3.5 transition-all">
                                <GrAddCircle className="w-[20px] h-[20px] mr-3" />
                                <span>Add task</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sign-up"
                                className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600   px-8 py-3.5 transition-all">

                                <GrSearch className="w-[20px] h-[20px] mr-3" />
                                <span>search</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/all-todos"
                                className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600   px-8 py-3.5 transition-all">

                                <GrInbox className="w-[20px] h-[20px] mr-3" />
                                <span>Inbox</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Completed-todos"
                                className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600   px-8 py-3.5 transition-all">

                                <FaRegCheckCircle className="w-[20px] h-[20px] mr-3" />
                                <span>Completed</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/UnCompleted-todos"
                                className="text-slate-800 text-[15px] gap-x-4 font-medium flex items-center text-blue-600   px-8 py-3.5 transition-all">

                                < FaCircleNotch className="w-[20px] h-[20px] mr-3" />
                                <span>Uncompleted</span>
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>
            <button
                onClick={toggleSidebar}
                className="fixed top-4 transition-all duration-300 bg-blue-500 text-white p-2 rounded-r"
                style={{
                    left: isOpen ? '16rem' : '0', // 16rem = 256px = w-64
                }}
            >
                {isOpen ? <HiOutlineXMark /> : <FaChevronRight />}
            </button>
        </div>
    );
}
