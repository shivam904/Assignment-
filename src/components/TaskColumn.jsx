import React, { useState } from "react";

import "../styles/TaskColumn.css";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import Drop from "./Drop";

const TaskColumn = ({ title, icon, tasks, status, handleDelete, setTasksCopy,setTasks,setActiveCard , onDrop}) => {
    const [toggle,setToggle]= useState(false);
    
    const editHnadler=()=>{
        setToggle(!toggle);
    }
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='' /> {title}
            </h2>
            {
            title === "To do" && (
            <button onClick={editHnadler} className="task_submit">
                    + Add Task
            </button>
            )
            }
            {
                toggle && (
                <div style={{marginTop:"1rem",display:"flex",alignItems:"center",justifyContent:"center",height:"50vh",width:"30vw",backgroundColor:"#D3D3D3", position:"absolute", zIndex:"1",padding:"1rem",borderRadius:"5px"}}>
                <TaskForm setTasks={setTasks} setTasksCopy={setTasksCopy} setToggle={setToggle}/>
                </div>)
            }
            <Drop onDrop={()=>onDrop(status,0)}/>

            {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <React.Fragment key={index}>
                        <TaskCard
                            key={index}
                            title={task.task}
                            description={task.description}
                            tags={task.tags}
                            handleDelete={handleDelete}
                            index={index}
                            setActiveCard={setActiveCard}
                        />
                        <Drop onDrop={()=>onDrop(status,index+1)}/>
                        </React.Fragment>

                    )
            )}
        </section>
    );
};

export default TaskColumn;
