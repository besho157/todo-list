'use client';
import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import Sidebar from '@/components/sidebar';

export default function UncompletedTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  const filteredTodos = todos.filter(todo => !todo.isCompleted);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Sidebar />
      <h2 className="text-xl font-bold mb-4">Uncompleted Tasks</h2>
      <ul className="space-y-3">
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