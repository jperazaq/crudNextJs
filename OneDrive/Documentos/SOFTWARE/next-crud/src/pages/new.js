 import { useState } from "react";
import Layout from "../components/Layout";
import  {useTask} from "../context/taskContext"
import { useRouter } from "next/router";
import { useEffect } from "react";
 
 const TaskFormPage = () =>{
     const [task, setTask] = useState({
         title: "",
         description:"",
     });

     const {createTask, updatedTask,tasks} = useTask();
     const {push, query} = useRouter();


     const handleChange = e =>{
         setTask({...task, [e.target.name]: e.target.value})
         
     }

     const handleSubmit = e =>{
         e.preventDefault()

         if(!query.id){
            createTask(task.title, task.description)
         } else{
             updatedTask(query.id, task)
         }
         
         push("/");

     }

     useEffect(() =>{
         if (query.id){
           const taskFound=  tasks.find(task => task.id === query.id)
           setTask({title:taskFound.title, description:taskFound.description})
         }

     },[])
    

        
    return (
      <Layout>

          <div  className=" flex justify-center items-center h-full">

          <form onSubmit={handleSubmit} className="bg-gray-700 mt-5 p-10 h-2/4">

                <h1 className="mb-5 mt-5 text-3xl">{query.id? "Actualizar Tarea":"Cree una tarea"}</h1>
                <input
                type="text"
                placeholder="Escriba una Tarea"
                className="bg-gray-800 focus:text-gray-100 focus-outline-none w-full px-4 px-3 mb-5" onChange={handleChange}
                name="title" value={task.title}
                />
                <textarea
                rows="2"
                placeholder="Escriba el detalle de la tarea"
                className="bg-gray-800 focus:text-gray-100 focus-outline-none w-full px-4 px-3 mb-5"
                name="description"
                value={task.description}
                onChange={handleChange}
                />

                <button className="bg-green-500 hover:bg-green-300 px-4 py-2 rounded-sm disabled:opacity-30 " disabled ={!task.title}> Guardar</button>

</form>



          </div>

         
      </Layout>
    );
}

export default TaskFormPage;