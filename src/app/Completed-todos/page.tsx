'use client';
import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import Sidebar from '@/components/sidebar';
import { FaRegCheckCircle } from 'react-icons/fa';
import { loadTodosFromLocalStorage } from '@/utils/loadTodos';




export default function CompletedTodos() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loaded = loadTodosFromLocalStorage();
    setTodos(loaded);
  }, []);

  const filteredTodos = todos.filter(todo => todo.isCompleted);

 
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 via-transparent to-transparent py-20 px-4  items-center justify-center'>

    <div className="max-w-2xl mx-auto p-4">
      <Sidebar />
      <div className='flex justify-center gap-4 '>
        <FaRegCheckCircle className=' text-3xl text-blue-600' />
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Completed Tasks</h2>
      </div>
      <ul className=" space-y-3 mt-4">
        {filteredTodos.map(todo => (
          <li key={todo.id} className="flex justify-between p-3 bg-white rounded shadow">
            <div>
              <p className="line-through text-gray-500">{todo.text}</p>
              <p className="text-sm text-gray-500">{new Date(todo.createdAt).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}