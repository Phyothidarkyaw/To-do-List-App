import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Heading />
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default App;
