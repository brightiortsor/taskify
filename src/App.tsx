import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
      setTodo("");
    }
  };
  console.log(todo);
  return (
    <div className="App">
      <h1 className="heading">taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => (
        <p>{t.todo}</p>
      ))}
    </div>
  );
};

export default App;
