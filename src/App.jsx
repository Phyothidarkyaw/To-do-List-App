import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="p-10">
      <Heading />
      <CreateTask  />
      <TaskList  />
    </div>
  );
};

export default App;
