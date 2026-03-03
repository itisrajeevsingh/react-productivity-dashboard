import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function DashboardPage({ tasks, addTask, toggleTask, deleteTask }) {
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <>
      <Header />

      <div className="stats">
        <StatCard title="Total Tasks" value={tasks.length} />
        <StatCard title="Completed" value={completedCount} />
        <StatCard title="Pending" value={pendingCount} />
      </div>

      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  );
}

function AnalyticsPage() {
  return <h2>Analytics Coming Soon...</h2>;
}

function SettingsPage() {
  return <h2>Settings Page</h2>;
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                tasks={tasks}
                addTask={addTask}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;