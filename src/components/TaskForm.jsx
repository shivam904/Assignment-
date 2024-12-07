import React, { useState } from "react";

import "../styles/TaskForm.css";

const TaskForm = ({ setTasks,setToggle,setTasksCopy }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    description:"",
    status: "todo",
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  
  const handleChangeTask = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChangeDescription = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTasksCopy((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      description:"",
      status: "todo",
      
    });
    setToggle(prev=>!prev)
  };
  return (
    <section className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChangeTask}
        />
        <textarea
          style={{resize:"none"}}
          type="text"
          name="description"
          value={taskData.description}
          className="task_input_desc"
          placeholder="Enter task description"
          onChange={handleChangeDescription}
        />


        <div className="task_form_bottom_line">
          
          <div>
            <button type="submit" className="task_submit">
              Submit Task
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;
