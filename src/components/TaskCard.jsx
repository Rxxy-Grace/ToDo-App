import { useNavigate } from "react-router-dom";

export const statusBadgeStyle = {
  Todo: "bg-yellow-500/20 text-yellow-400",
  "In Progress": "bg-blue-500/20 text-blue-400",
  Done: "bg-green-500/20 text-green-400",
  Blocked: "bg-red-500/20 text-red-400",
};


const TaskCard = ({ tasks, onDelete, onStatusChange }) => {
  const navigate = useNavigate();
  
  const handleTodoClick = (task) => {
    onStatusChange(task.id, "In Progress");
    const url = `/task/${task.id}`;
    navigate(url);
  };


  const handleInProgressClick = (task) => {
    onStatusChange(task.id, "In Progress");
    const url = `/task/${task.id}`;
    navigate(url);
  };


  return (

    <div className="space-y-4">

      {tasks.map((task) => (

        <div
          key={task.id}
          className="bg-secondarycard text-sm text-black border border-primary rounded-lg p-4 shadow-md max-w-[500px] min-h-[150px]"
        >


          <div className="flex items-center justify-between mb-2">


            <span className="text-lg font-bold">
              {task.title}
            </span>


            <div className="flex items-center gap-2">


              <span
                className={
                  `text-xs font-bold px-3 py-1 rounded-md ${
                    statusBadgeStyle[task.displayStatus]
                  }`
                }
              >
                {task.displayStatus}
              </span>


              <button
                onClick={() => onDelete(task.id)}
                className="bg-red-500/20 text-red-500 text-xs font-bold px-3 py-1 rounded-md hover:bg-red-500/30"
              >
                Delete
              </button>


            </div>


          </div>



          <p className="text-gray-600 text-sm">
            Task Description: {task.displayDescription}
          </p>




          {task.isBlocked ? (

            <p className="text-red-500 text-sm mt-6">
              Waiting on {task.previousTaskTitle} to be Done
            </p>


          ) : (


            <div className="flex space-x-2 mt-6">


            <button
                disabled={task.isBlocked}
                onClick={() => handleTodoClick(task)}
                className={`border text-sm py-1 px-3 rounded-md ${
                task.status === "Todo"
                ? "bg-primary text-white"
                : "bg-primary-foreground text-black"
                } ${task.isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Todo
            </button>


            <button
                disabled={task.isBlocked}
                onClick={() => handleInProgressClick(task)}
                className={`border text-sm py-1 px-3 rounded-md ${
                task.status === "In Progress"
                ? "bg-primary text-white"
                : "bg-primary-foreground text-black"
              } ${task.isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                  In Progress
            </button>

            
            <button
                  disabled={task.isBlocked}
                  onClick={() => onStatusChange(task.id, "Done")}
                  className={`border text-sm py-1 px-3 rounded-md ${
                  task.status === "Done"
                   ? "bg-primary text-white"
                    : "bg-primary-foreground text-black"
                } ${task.isBlocked ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                      Done
              </button>


              


            </div>


          )}


        </div>


      ))}


    </div>

  );

};


export default TaskCard;