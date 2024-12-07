import React from "react";

import "../styles/TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title,description, tags, handleDelete, index, setActiveCard }) => {
    return (
        <article className='task_card'draggable onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)}>
            <p className='task_text'>{title}</p>
            <p className='task_text'>{description}</p>

            <div className='task_card_bottom_line'>
                <div
                    className='task_delete'
                    onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} className='delete_icon' alt='' />
                </div>
            </div>
        </article>
    );
};

export default TaskCard;
