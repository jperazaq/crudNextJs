import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTask } from "../context/taskContext";


const Layout = ({children}) =>{

    const router = useRouter();
    const {tasks} = useTask();

    return (
      <>
        <div className=" h-screen text-white bg-gray-900">
          <header className=" flex bg-gray-800 text-white px-28 py-5 flex-items-center">
              <Link href="/">
              <a>
              <h1 className="font-black text-lg">Acciones de la tarea</h1>
              </a>
              
              </Link>

              <span className="ml-2 text-gray-400 font-bold">
                  {tasks.length} Tareas
              </span>
            
            <div className="flex-grow text-right ">
              <button  onClick={()=>router.push("/new")} className="bg-green-500 px-2 py-2 hover:bg-green-300 px-5 px-2 text-gray font-bold rounded inline-flex items-center  ">
                {" "}
                <AiOutlinePlus className="mr-2" />
                Nueva tarea{" "}
              </button>
            </div>
          </header>

          <main className="px-28 py-18 flex-items-center">{children}</main>
        </div>
      </>
    );
}

export default Layout;