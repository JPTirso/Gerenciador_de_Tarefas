import { ChevronRightIcon, DeleteIcon } from "lucide-react";

function Tasks({tasksP, onTaskClickP, onDeletClick}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasksP.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClickP(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}
          >
            {task.text}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeletClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
