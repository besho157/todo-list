import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}
