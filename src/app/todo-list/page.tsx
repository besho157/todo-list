'use client';
import { useState, useEffect } from 'react';
import { Todo } from '../../types/todo';
import Sidebar from '@/components/sidebar';
import { useRouter } from 'next/navigation';
type FilterType = 'all' | 'completed' | 'uncompleted';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Router = useRouter();
  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  
  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos)
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');

    if (!isLogin) {
      Router.replace('/login');
    } else {
      setIsLoading(false);
    }
  }, [Router]); 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: inputText.trim(),
        createdAt: new Date(),
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const startEditing = (id: string) => {
    setEditingId(id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
      setInputText(todo.text);
    }
  };

  const updateTodo = () => {
    if (editingId && inputText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === editingId ? { ...todo, text: inputText.trim() } : todo
      ));
      setEditingId(null);
      setInputText('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'uncompleted') return !todo.isCompleted;
    return true;
  });


  return isLoading ? " loading..." : (

    <div className="max-w-2xl mx-auto p-4">
      <Sidebar />
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a new todo..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={editingId ? updateTodo : addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {editingId ? 'Update' : 'Add'}
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('uncompleted')}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === 'uncompleted'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          Uncompleted
        </button>
      </div>

      <ul className="space-y-3">
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
          >
            <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleComplete(todo.id)}
                className="w-5 h-5"
              />
              <div className="flex-1">
                <p className={`${todo.isCompleted ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </p>
                {isClient && (
                  <p className="text-sm text-gray-500">
                    Created: {todo.createdAt.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => startEditing(todo.id)}
                className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 