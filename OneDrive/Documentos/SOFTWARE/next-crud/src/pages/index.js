import {useTask} from "../context/taskContext";
import Layout from "../components/Layout"
import {VscTrash} from"react-icons/vsc"
import { useRouter } from "next/router";
import useEffect from "react";


const Home = () =>{

const {tasks, deleteTask} = useTask();
const{push, query} =useRouter();
console.log(query);





return( 

<Layout>

<div className="flex justify-center">

{
   tasks.length === 0 ? ( 
   <h2 className="text-3xl">No hay tareas</h2>):
   
   (
    
    <div className="w-7/12">
      {
      tasks.map((tasks,i)=>(
        
        <div className="bg-gray-700 hover-bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start items-center w-100" onClick={()=>push('/'+ tasks.id) }key={tasks.id}>
       
          <span className="text-5xl mr-5"  >{i+1}</span>
          <div className="w-full">
          <div className="flex justify-between">
          <h1 className="font-bold  ">{tasks.title}</h1>
          <button className="bg-red-700 hover:bg-red-600  px-3 py-1"
          
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(tasks.id);
          }}>
           < VscTrash className="mr-2 inline-flex items-center"
           
           
           />
            Borrar</button>
          </div>
          <p className="text-gray-300">{tasks.description}</p>
      
          <span className="text-gray-400">{tasks.id}</span>

          </div>
         
        </div>
      ))}
      </div> 
   )
      
   
 }


</div>
</Layout>

);
 
    

};

export default Home