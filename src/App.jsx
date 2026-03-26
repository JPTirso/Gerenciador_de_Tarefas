import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState ([
    {
      id:1,
      text: "Estudar React",
      description: "23 de março as 14:00",
      isCompleted: true
    },
    {
      id:2,
      text: "Estudar HTML",
      description: "23 de março as 18:00",
      isCompleted: false
    },
    {
      id:3,
      text: "Estudar JS",
      description: "24 de março as 14:00",
      isCompleted: false
    }

  ]);
  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
     <div className="w-[500px]">
       <h1 className="text-3xl text-slate-100 font-bond text-center">
         Gerenciador de Tarefas 
        </h1>
       <AddTask />
       <Tasks tasks={tasks}/>
      </div>
    </div>
    
  );
}


export default App;