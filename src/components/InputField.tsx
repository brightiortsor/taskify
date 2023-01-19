import "./styles.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="input"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};
export default InputField;
