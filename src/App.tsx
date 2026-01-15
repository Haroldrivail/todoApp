import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { Construction } from "lucide-react";

type Priority = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

function App() {
  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("Moyenne");

  const savedTodos: string | null = localStorage.getItem("todos");
  const initialTodos: Todo[] = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<Priority | "Tous">("Tous");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      priority: priority,
    };

    setTodos([newTodo, ...todos]);
    setInput("");
    setPriority("Moyenne");
  };

  let filteredTodos: Todo[] = [];

  if (filter === "Tous") {
    filteredTodos = todos;
  } else {
    filteredTodos = todos.filter((todo) => todo.priority === filter);
  }

  const urgentCount = todos.filter(
    (todo) => todo.priority === "Urgente"
  ).length;
  const mediumCount = todos.filter(
    (todo) => todo.priority === "Moyenne"
  ).length;
  const lowCount = todos.filter((todo) => todo.priority === "Basse").length;
  const totalCount = todos.length;

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const [selectedTodo, setSelectedTodo] = useState<Set<number>>(new Set());

  const toggleSelectedTodo = (id: number) => {
    const newSelectedTodo = new Set(selectedTodo);
    if (newSelectedTodo.has(id)) {
      newSelectedTodo.delete(id);
    } else {
      newSelectedTodo.add(id);
    }
    setSelectedTodo(newSelectedTodo);
  };

  const finishSelectedTodos = () => {
    setTodos(todos.filter((todo) => !selectedTodo.has(todo.id)));
    setSelectedTodo(new Set());
  };

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 flex flex-col gap-4 my-5 md:my-15 bg-base-200 p-5 rounded-2xl">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="input w-full"
            placeholder="Ajouter une tâche ..."
            value={input}
            onChange={(e) => setInput(e.target.value as string)}
          />
          <select
            className="select w-full"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value="Urgente">Urgente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
          <button
            onClick={addTodo}
            className="btn btn-sm md:btn-md btn-primary"
          >
            Ajouter
          </button>
        </div>
        <div className="space-y-2 flex-1 h-fit">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex justify-center md:justify-start flex-wrap gap-4">
              <button
                className={`btn btn-sm md:btn-md btn-soft ${
                  filter === "Tous" ? "btn-secondary" : ""
                }`}
                onClick={() => setFilter("Tous")}
              >
                Tous({totalCount})
              </button>
              <button
                className={`btn btn-sm md:btn-md btn-soft ${
                  filter === "Urgente" ? "btn-secondary" : ""
                }`}
                onClick={() => setFilter("Urgente")}
              >
                Urgente({urgentCount})
              </button>
              <button
                className={`btn btn-sm md:btn-md btn-soft ${
                  filter === "Moyenne" ? "btn-secondary" : ""
                }`}
                onClick={() => setFilter("Moyenne")}
              >
                Moyenne({mediumCount})
              </button>
              <button
                className={`btn btn-sm md:btn-md btn-soft ${
                  filter === "Basse" ? "btn-secondary" : ""
                }`}
                onClick={() => setFilter("Basse")}
              >
                Basse({lowCount})
              </button>
            </div>
            <button
              className="btn btn-sm md:btn-md btn-primary mt-2 md:mt-0"
              disabled={selectedTodo.size === 0}
              onClick={finishSelectedTodos}
            >
              Finir la sélection({selectedTodo.size})
            </button>
          </div>
          <div className="divider" />

          <div className="space-y-2">
            {filteredTodos.length > 0 ? (
              <ul className="divide-y divide-primary/20">
                {filteredTodos.map((todo) => (
                  <li key={todo.id} className="py-2">
                    <TodoItem
                      todo={todo}
                      onDelete={deleteTodo}
                      isSelected={selectedTodo.has(todo.id)}
                      onSelect={toggleSelectedTodo}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex justify-center items-center flex-col p-5">
                <div>
                  <Construction className="w-40 h-40 text-primary" />
                </div>
                <div className="text-sm font-semibold mt-2">
                  {filter === "Tous"
                    ? "Aucune tâche à afficher"
                    : `Aucune tâche ${filter.toLowerCase()} à afficher`}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
