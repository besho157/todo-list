'use client';
import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import Sidebar from '@/components/sidebar';
import { loadTodosFromLocalStorage } from '@/utils/loadTodos';
import {  GrInbox } from "react-icons/gr";


export default function AllTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const loaded = loadTodosFromLocalStorage();
        setTodos(loaded);
        setIsClient(true); // فعلنا هنا الـ isClient بعد التحميل
    }, []);

    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-50 via-transparent to-transparent py-20 px-4  items-center justify-center'>

        <div className='max-w-2xl mx-auto p-4'>
            <Sidebar />
            <div className='flex justify-center gap-4 ' >
            <GrInbox className=' text-3xl text-blue-600'/>
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">All Todos</h1>
            </div>
            <ul className="space-y-3">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
                    >
                        <div className="flex items-center gap-3 flex-1">
                            <div className="flex-1">
                                <p className={`${todo.isCompleted ? 'line-through text-gray-500' : ''}`}>
                                    {todo.text}
                                </p>
                                {isClient && todo.createdAt && (
                                    <p className="text-sm text-gray-500">
                                        Created: {new Date(todo.createdAt).toLocaleString()}
                                    </p>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}
