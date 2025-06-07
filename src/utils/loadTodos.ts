import { Todo } from "@/types/todo";

export function loadTodosFromLocalStorage(): Todo[] {
  if (typeof window === 'undefined') return [];

  const saved = localStorage.getItem("todos");
  if (!saved) return [];

  try {
    const todos = JSON.parse(saved);
    return todos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
    }));
  } catch (err) {
    console.error("Failed to parse todos from localStorage", err);
    return [];
  }
}
