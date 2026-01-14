import { Trash } from "lucide-react";

type Priority = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  isSelected?: boolean;
  onSelect?: (id: number) => void;
};

const TodoItem = ({ todo, onDelete, isSelected, onSelect }: TodoItemProps) => {
  return (
    <div className=" bg-base-100 shadow-md rounded-xl p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={isSelected}
            onChange={() => onSelect && onSelect(todo.id)}
          />
          <span className="text-md font-bold">
            <span>{todo.text}</span>
          </span>
          <span
            className={`badge badge-sm badge-soft ${
              todo.priority === "Urgente"
                ? "badge-error"
                : todo.priority === "Moyenne"
                ? "badge-warning"
                : "badge-success"
            }`}
          >
            {todo.priority}
          </span>
        </div>
        <button
          className="btn btn-circle btn-soft 
        btn-error btn-sm"
          onClick={() => onDelete(todo.id)}
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
