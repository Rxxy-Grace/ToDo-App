import { useParams, useNavigate } from "react-router-dom";
import { statusBadgeStyle } from "./TaskCard";

const TaskDetail = ({ tasks, onStatusChange }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) return <p className="p-5">Task not found.</p>;

  return (
    <div className="bg-primarycard text-primary max-w-md w-full min-h-[550px] p-5 rounded-2xl">
      <button onClick={() => navigate("/")} 
      className="text-sm underline mb-4">
        ← Back
      </button>

      <h1 className="text-2xl font-bold mb-2">
        {task.title}
      </h1>

      <span
        className={`text-xs font-bold px-3 py-1 rounded-md ${
          statusBadgeStyle[task.status] 
        }`}
      >
        {task.status}
      </span>

      <p className="text-gray-700 mt-4">{task.displayDescription}</p>

      <button
        onClick={() => onStatusChange(task.id, "Done")}
        className="bg-green-600 text-white text-sm px-4 py-2 rounded-md mt-6"
      >
        Mark as Done
      </button>
    </div>
  );
};

export default TaskDetail;