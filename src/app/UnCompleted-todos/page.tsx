'use client';
import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import Sidebar from '@/components/sidebar';
import { FaCircleNotch  } from 'react-icons/fa';
import { loadTodosFromLocalStorage } from '@/utils/loadTodos';

export default function UncompletedTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loaded = loadTodosFromLocalStorage();
    setTodos(loaded);
  }, []);

  const filteredTodos = todos.filter(todo => !todo.isCompleted);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Sidebar />
      <div className='flex items-center gap-4  '>
        <FaCircleNotch   className=' text-3xl text-blue-600'/>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uncompleted Tasks</h2>
      </div >

      <ul className="space-y-3 mt-4">
        {filteredTodos.map(todo => (
          <li key={todo.id} className="flex justify-between p-3 bg-white rounded shadow">
            <div>
              <p>{todo.text}</p>
              <p className="text-sm text-gray-500">{new Date(todo.createdAt).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}