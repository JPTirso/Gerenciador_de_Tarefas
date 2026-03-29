import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useRef, useEffect } from "react";


function App() {
  let contador = useRef(JSON.parse(localStorage.getItem("id_contador")) || (0));

  const [tasksV, setTasksV] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasksV));
  localStorage.setItem("id_contador", JSON.stringify(contador.current));
}, [tasksV]);

  function onTaskClick(taskid_Clicked) {
    const newTasks = tasksV.map((task) => {
      if (task.id === taskid_Clicked) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasksV(newTasks);
  }

  function deletTask(taskid_Clicked) {
    const deletTask = tasksV.filter((task) => task.id != taskid_Clicked);
    setTasksV(deletTask);
  }

  function addTask(title,description) {
    if(title.trim() !== "" && description.trim() !== ""){
      contador.current++;
      const newtask = {
        id: contador.current,
        title: title,
        description: description,
        isCompleted: false,
      };
      setTasksV([...tasksV, newtask])
    }
    else{
      return alert("Preencha todos os campos antes de adicionar")
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bond text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskClickP = {addTask} />
        <Tasks
          tasksP={tasksV}
          onTaskClickP={onTaskClick}
          onDeletClickP ={deletTask}
        />
      </div>
    </div>
  );
}

export default App;
