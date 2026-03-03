import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks added yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;