import React, { useState } from 'react'
import "../styles/Drop.css"
const Drop = ({onDrop}) => {
    const [showDrop,setShowDrop]=useState(false);
  return (
    <section
     onDragEnter={()=>setShowDrop(true)}
      onDragLeave={()=>setShowDrop(false)}
       className={showDrop ? "drop" :"hide"}
        onDrop={()=>{onDrop(); setShowDrop(false);}} onDragOver={(e)=>e.preventDefault()}>
        Drop here
    </section>
  )
}

export default Drop
