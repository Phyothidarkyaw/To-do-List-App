import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
  {
    id: 1,
    task: "Complete JavaScript project",
    isDone: false
  },
  {
    id: 2,
    task: "Buy groceries",
    isDone: true
  },
  {
    id: 3,
    task: "Call dentist for appointment",
    isDone: false
  },
  {
    id: 4,
    task: "Pay electricity bill",
    isDone: true
  },
  {
    id: 5,
    task: "Read 30 pages of book",
    isDone: false
  }
]);
  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };
  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id ))
  }
  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
