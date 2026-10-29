import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todo from "./components/Todo";
import TaskDetail from "./components/TaskDetail";


const initialTasks = [
  {
    id: 1,
    title: "Task 1",
    status: "Todo",
    displayStatus: "Todo",
    displayDescription: "This is a sample task to complete Task 2.",
    isBlocked: false,
    previousTaskId: null,
    previousTaskTitle: "",
  },

  {
    id: 2,
    title: "Task 2",
    status: "Blocked",
    displayStatus: "Blocked",
    displayDescription: "This is a sample task to complete Task 3.",
    isBlocked: true,
    previousTaskId: 1,
    previousTaskTitle: "Task 1",
  },

  {
    id: 3,
    title: "Task 3",
    status: "Blocked",
    displayStatus: "Blocked",
    displayDescription: "This is a sample task to complete Task 4.",
    isBlocked: true,
    previousTaskId: 2,
    previousTaskTitle: "Task 2",
  },
];


const App = () => {

  // Store tasks
  const [tasks, setTasks] = useState(initialTasks);


  // Add new task
  const addTask = (newTask) => {
    setTasks((previousTasks) => {
    const lastTask = previousTasks[previousTasks.length - 1];

    const task = {
      ...newTask,
      previousTaskId: lastTask.id,
      previousTaskTitle: lastTask.title,
      isBlocked: true,
      status: "Blocked",
      displayStatus: "Blocked",
    };

    return [...previousTasks, task];
  });
};

  // Delete task
  const deleteTask = (id) => {

    setTasks((previousTasks) => {

      const updatedTasks = previousTasks.filter((task) => {

        return task.id !== id;

      });


      return updatedTasks;

    });

  };



  // Update task status
  const updateStatus = (id, newStatus) => {

  setTasks((previousTasks) => {

    const updatedTasks = previousTasks.map((task) => {

      if (task.id === id) {
        return {
          ...task,
          status: newStatus,
          displayStatus: newStatus,
        };
      }

      return task;

    });


    if (newStatus === "Done") {

      return updatedTasks.map((task) => {

        if (task.previousTaskId === id) {

          return {
            ...task,
            isBlocked: false,
            status: "Todo",
            displayStatus: "Todo",
          };

        }

        return task;

      });

    }

    return updatedTasks;

  });

};



  return (

    <BrowserRouter>

      <div className="min-h-screen bg-background text-foreground flex justify-center">


        <Routes>


          <Route

            path="/"

            element={

              <Todo

                tasks={tasks}

                onAdd={addTask}

                onDelete={deleteTask}

                onStatusChange={updateStatus}

              />

            }

          />



          <Route

            path="/task/:id"

            element={

              <TaskDetail

                tasks={tasks}

                onStatusChange={updateStatus}

              />

            }

          />


        </Routes>


      </div>


    </BrowserRouter>

  );

};


export default App;