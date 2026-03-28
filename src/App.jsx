import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { useRef } from "react";

function App() {
  let contador = useRef(3);

  const [tasksV, setTasksV] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "23 de março as 14:00",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Estudar HTML",
      description: "23 de março as 18:00",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar JS",
      description: "24 de março as 14:00",
      isCompleted: false,
    },
  ]);

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
    if(title !== "" && description !== ""){
      contador.current++;
      const newtask = {
        id: contador.current,
        title: title,
        descriptionP: description,
        isCompleted: false,
      };
      setTasksV([...tasksV, newtask])
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
