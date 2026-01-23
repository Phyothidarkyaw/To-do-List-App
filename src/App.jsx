import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    "Call client about project update",
    "Prepare meeting agenda",
    // "Update project timeline",
    // "Review pull requests",
    // "Backup important files",
  ]);
  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };
  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
