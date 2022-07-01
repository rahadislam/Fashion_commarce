import React, { useEffect, useState } from 'react';

import {  Link } from "react-router-dom";

import { toast } from 'react-toastify';

const Todo = () => {
    
    const [task, setTask] = useState([]);
    const [taskCom,setTaskcom]=useState();
                  
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);


    const handelvalue=(_id,t)=>{
            fetch("http://localhost:5000/complete", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(t)
                })
        .then(res=>res.json())
        .then(complete=>{

        const url=(`http://localhost:5000/task/${_id}`);
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{

            if(data){
                const uiUpdate=task.filter(fd=>fd._id !== _id);
                setTask(uiUpdate);
            }
            
            
        })
        })
        

    }


    const handelDelete=(_id)=>{
        const url=(`http://localhost:5000/task/${_id}`);
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{

            if(window.confirm("Are you sure?")){
                const uiUpdate=task.filter(fd=>fd._id !== _id);
                setTask(uiUpdate);
            }
            
            
        })
    }
    return (
        <div class="mx-5 my-3">
            <h2 className='text-3xl mx-5 my-3'>Task Detals</h2>

            {
                task.map(t => 
                <div className='w-2/4 mx-5 flex' key={t._id}>
                    <label>
                        <input type="checkbox" onClick={()=>handelvalue(t._id,t)} class="checkbox " />
                    </label>
                    <div className='px-5'>
                    <h2 className='text-xl font-medium'>{t.name}</h2>
                    <p>{t.description}</p>
                    <Link to={`/update/${t._id}`} class="btn btn-xs bg-yellow-300 text-white border-none mr-5">update</Link>
                    <button class="btn btn-xs bg-yellow-300 text-white border-none" onClick={()=>handelDelete(t._id)}>Delete</button>
                    </div>
                    
                </div>)
            }


        </div>
    );
};

export default Todo;