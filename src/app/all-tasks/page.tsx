'use client';
import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import Sidebar from '@/components/sidebar';
import { loadTodosFromLocalStorage } from '@/utils/loadTodos';

export default function AllTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const loaded = loadTodosFromLocalStorage();
        setTodos(loaded);
        setIsClient(true); // فعلنا هنا الـ isClient بعد التحميل
    }, []);

    return (
        <div className='max-w-2xl mx-auto p-4'>
            <Sidebar />
            <h1 className="text-2xl font-bold my-4 text-center">All Todos</h1>
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
    );
}
