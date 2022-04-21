
import { createContext , useContext} from "react";
import { useState } from "react";
import {v4 as uuid} from "uuid";

export const TaskContext = createContext();

export const useTask = () => {return useContext(TaskContext);}


export const TaskProvider = ({children}) =>{
  const [tasks, setTasks] = useState([
    { id: "1", title: "primera tares", descripcion: "La primera" },
  ]);



  const createTask = (title,description) =>{
      setTasks([...tasks,{title,description,id:uuid()}])
  }


  const updatedTask =(id, updatedTask) =>{

    setTasks([...tasks.map(task => task.id ===id ? {...task, ...updatedTask}: task)])

  }


  const deleteTask = id => setTasks([...tasks.filter(task => task.id !== id)])

  
  return (
    <TaskContext.Provider value={{ tasks,createTask, updatedTask,deleteTask }}>{children}</TaskContext.Provider>
  );
}