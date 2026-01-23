import React from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const tasks = [
    "Call client about project update",
    "Prepare meeting agenda",
    "Update project timeline",
    "Review pull requests",
    "Backup important files",
  ];
  return (
    <div className="p-10">
      <Heading />
      <CreateTask />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
