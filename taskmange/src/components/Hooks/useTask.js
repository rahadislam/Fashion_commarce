import { useEffect, useState } from "react";

const useTask = (_id) => {
    const [taskCom,setTaskcom]=useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/task/${_id}`)
        .then(res=>res.json())
        .then(data=>setTaskcom(data))
    },[_id])
    
    return [taskCom];
};

export default useTask;