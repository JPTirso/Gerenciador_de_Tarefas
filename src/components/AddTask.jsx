import { useRef } from "react";

function AddTask({ onAddTaskClickP }) {
  const title = useRef();
  const description = useRef();

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        ref={title}
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <input
        ref={description}
        type="text"
        placeholder="Digite a descirção da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <button
        onClick={() =>
          onAddTaskClickP(title.current.value, description.current.value)
        }
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
