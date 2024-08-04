import { useState } from "react";

export default function NewTask({onAddTask, project_id}) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChage(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAddTask(project_id, enteredTask)
    setEnteredTask("")
  }
  return (
    <div className="flex items-center gap-4 mb-2">
      <input
        className="w-64 px-2 py-1 rounded-md bg-stone-300"
        type="text"
        placeholder="add new task"
        value={enteredTask}
        onChange={handleChage}
      />
      <button
        onClick={handleClick}
        className="px-2 py-1 rounded text-stone-700 hover:text-stone-950 bg-stone-300 hover:bg-stone-400"
      >
        Add Task
      </button>
    </div>
  );
}
