import React, { useState, useEffect } from "react";

import "./styles/App.css";
import TaskColumn from "./components/TaskColumn";
import doneIcon from "./assets/done-1476-svgrepo-com.svg";
import reviewIcon from "./assets/review-screen-svgrepo-com.svg"
import SearchBar from "./components/SearchBar";
import progressIcon from "./assets/in-progress-svgrepo-com.svg"
import TodoIcon from "./assets/to-do-svgrepo-com.svg"

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [tasksCopy, setTasksCopy] = useState(JSON.parse(oldTasks) || []);

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
    setTasksCopy(newTasks);
  };

  const onDrop=(status,position)=>{
    if(activeCard==null || activeCard===undefined) return ;
    const taskMove= tasks[activeCard];
   const updatedTask= tasks?.filter((task,index)=>index !== activeCard);
   updatedTask.splice(position,0,{
    ...taskMove,status:status
   })
   setTasks(updatedTask);
   setTasksCopy(updatedTask);

  }
  const [filteredItems,setFilteredItems]=useState(...tasks);

  const filteredData=(newData)=>{
    if(newData==" "){
      setTasks(tasksCopy);
    }else{
    setTasks(newData);
    }
    
  }

  return (
    <div className="app">

      <div className="app_main">
      <SearchBar tasks={tasks} oldTasks={tasksCopy} filteredData={filteredData} setFilteredItems={setFilteredItems}/>
      </div>
      <div className="app_main2">
        <TaskColumn
          setTasks={setTasks}
          setTasksCopy={setTasksCopy}
          title="To do"
          icon={TodoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
        setTasks={setTasks}
        setTasksCopy={setTasksCopy}
          title="In Progress"
          icon={progressIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
        setTasks={setTasks}
        setTasksCopy={setTasksCopy}
          title="Peer Review"
          icon={reviewIcon}
          tasks={tasks}
          status="Peer Review"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        
        <TaskColumn
        setTasks={setTasks}
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        </div>
  
    </div>
  );
};

export default App;