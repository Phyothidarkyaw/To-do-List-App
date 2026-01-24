import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    {
      id: 1,
      task: "Complete JavaScript project",
      isDone: false,
    },
    {
      id: 2,
      task: "Buy groceries",
      isDone: true,
    },
    {
      id: 3,
      task: "Call dentist for appointment",
      isDone: false,
    },
    {
      id: 4,
      task: "Pay electricity bill",
      isDone: true,
    },
    {
      id: 5,
      task: "Read 30 pages of book",
      isDone: false,
    },
  ],
  addTask: (newTask) => set((state) => ({tasks : [...state.tasks,newTask]})),
  removeTask: (taskId) =>
    set((state) => ({ tasks: state.tasks.filter((el) => el.id !== taskId) })),
  doneTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((el) =>
        el.id == taskId ? { ...el, isDone: !el.isDone } : el,
      ),
    })),
}));

export default useTaskStore;
