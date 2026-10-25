import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: (newTask) =>
        set((state) => ({ tasks: [...state.tasks, newTask] })),
      removeTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.filter((el) => el.id !== taskId),
        })),
      doneTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((el) =>
            el.id == taskId ? { ...el, isDone: !el.isDone } : el,
          ),
        })),
      editTask: (taskId, updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((el) =>
            el.id === taskId ? { ...el, task: updatedTask } : el,
          ),
        })),
    }),
  ),
);

export default useTaskStore;
