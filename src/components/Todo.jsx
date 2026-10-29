import { useState } from "react";
import FilterBar from "./FilterBar";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";


const Todo = ({ tasks, onAdd, onDelete, onStatusChange }) => {

  const [activeFilter, setActiveFilter] = useState("All");


  // 1. Sort tasks by number
  const sortedTasks = [...tasks].sort((a, b) => {
    return a.id - b.id;
  });



  // 2. Add dependency status
  const updatedTasks = sortedTasks.map((task, index) => {

    const previousTask = sortedTasks[index - 1];


    const blocked =
      previousTask && previousTask.status !== "Done";


    return {
      ...task,

      displayStatus: blocked
        ? "Blocked"
        : task.status,

      isBlocked: blocked,

      previousTaskTitle: previousTask
        ? previousTask.title
        : "",

    };

  });



  // 3. Filter tasks
  const filteredTasks =
    activeFilter === "All"
      ? updatedTasks
      : updatedTasks.filter(
          (task) => task.displayStatus === activeFilter
        );



  return (
    <div className="bg-primarycard text-primary max-w-md w-full min-h-[550px] p-4 rounded-2xl">


      <h1 className="text-2xl font-bold mb-3">
        To-Do List
      </h1>


      <AddTask 
        onAdd={onAdd}
      />


      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />


      <TaskCard
        tasks={filteredTasks}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
      />


    </div>
  );
};


export default Todo;