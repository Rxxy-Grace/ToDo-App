import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      displayDescription: "No description",
    };

    onAdd(newTask);

    setTitle("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-primary rounded-lg px-3 py-2"
      />

      <button
        onClick={handleAdd}
        className="bg-primary text-white px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;