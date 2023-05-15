import AddTask from "./AddTask";
import PendingTask from "./pendingTask";
import CompletedTask from "./CompletedTask";
import { useEffect,useState } from "react";
const TodoList = () => {
    const [tasks,setTasks] = useState([]);
    
    const getTaskData = async ()=>{
        
        const url="http://localhost:3000/tasks";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setTasks(data);
    }

    useEffect(()=>{
        getTaskData();
    },[]);

    const AddTaskAction = async (name)=>{
        const url="http://localhost:3000/addtasks";
        const data = {
            task_desc:name
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();  
        console.log(json);
        getTaskData();
    }

    const handleTaskStatusChange = async (taskID)=>{
        const url="http://localhost:3000/updatetasks";
        const data = {
            taskid:taskID
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();
        getTaskData();
    }

    const handleTaskDelete = async (taskID)=>{
        const url="http://localhost:3000/deletetask";
        const data = {
            taskid:taskID
        };
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }
        const res = await fetch(url,options);
        const json = await res.json();
        getTaskData();
    }

    const renderPendingTasks = ()=>{
        return (
            <>
            <div className="container mt-4">
                <div className="card col-lg-6 offset-lg-3">
                    <div className="card-header text-center bg-primary text-white">
                        <h2>Pending Tasks Lists</h2>
                    </div>
                </div>
            </div>
            {
                tasks.map(task=>{
                    if(task.is_Completed != true && task.is_Deleted == false)
                    return <PendingTask data={task} changetaskstatus={handleTaskStatusChange} delete={handleTaskDelete}/>
                })
            }
            </>
        )
    }

    const renderCompletedTasks = ()=>{
        return (
            <>
                <div className="container mt-4">
                    <div className="card col-lg-6 offset-lg-3">
                        <div className="card-header text-center bg-primary text-white">
                            <h2>Completed Tasks Lists</h2>
                        </div>
                    </div>
                </div>
                {
                    tasks.map(task=>{
                        if(task.is_Completed == true)
                        return <CompletedTask data={task}/>
                    })
                }
            </>
        )
    }

    return(
        <>
            <AddTask addTask={AddTaskAction}/>
            {renderPendingTasks()}
            {renderCompletedTasks()}
        </>
    );
}

export default TodoList;