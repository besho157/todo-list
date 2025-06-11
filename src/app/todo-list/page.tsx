'use client';
import { useState, useEffect } from 'react';
import { Todo } from '../../types/todo';
import Sidebar from '@/components/sidebar';
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

type FilterType = 'all' | 'completed' | 'uncompleted';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      router.replace('/login');
      return;
    }

    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        // هنا استبدلت any بنوع Todo
        const parsed = JSON.parse(savedTodos).map((todo: Todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          id: todo.id.toString(),
        }));
        setTodos(parsed);
      } catch (err) {
        console.error('Invalid todos in localStorage', err);
        setTodos([]);
      }
    }
    setIsLoading(false);
  }, [router]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoading]);

  const addTodo = () => {
    if (!inputText.trim()) return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isCompleted: false,
      createdAt: new Date(),
    };
    setTodos(prev => [...prev, newTodo]);
    setInputText('');
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const startEditing = (id: string) => {
    setEditingId(id);
    const todo = todos.find(t => t.id === id);
    if (todo) setInputText(todo.text);
  };

  const updateTodo = () => {
    if (editingId && inputText.trim()) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editingId ? { ...todo, text: inputText.trim() } : todo
        )
      );
      setEditingId(null);
      setInputText('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.isCompleted;
    if (filter === 'uncompleted') return !todo.isCompleted;
    return true;
  });

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 via-transparent to-transparent py-20 px-4  items-center justify-center'>

    <div className="max-w-2xl mx-auto p-4">
      <Sidebar />

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Enter a new todo..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              if (editingId) {
                  updateTodo();
              } else {
                  addTodo();
              }
          }
          }}
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
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'completed'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('uncompleted')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'uncompleted'
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Uncompleted
        </button>
      </div>

      <ul className="space-y-3">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found.</p>
        ) : (
          filteredTodos.map(todo => (
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
                  <p
                    className={`${
                      todo.isCompleted ? 'line-through text-gray-500' : ''
                    }`}
                  >
                    {todo.text}
                  </p>
                  <p className="text-sm text-gray-500">
                    Created: {isClient ? todo.createdAt.toLocaleString() : ''}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEditing(todo.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm duration-300 hover:scale-125"
                >
                  <FaRegEdit /> 
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm duration-300 hover:scale-125"
                >
                  <FaRegTrashCan/>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
    </div>
  );
}
