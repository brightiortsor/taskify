import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task: task, isCompleted: false }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">taskify</h1>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
