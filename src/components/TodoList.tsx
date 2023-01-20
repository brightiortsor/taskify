import { Todo } from "../model";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <p>{todo.todo}</p>
          <button
            onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
