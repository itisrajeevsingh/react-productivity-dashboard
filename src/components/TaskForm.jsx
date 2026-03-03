import { useState } from "react";

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    addTask(taskText);
    setTaskText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;