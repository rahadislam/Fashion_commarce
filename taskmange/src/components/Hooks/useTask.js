import { useEffect, useState } from "react";

const useTask = (_id) => {
    const [taskCom,setTaskcom]=useState();
    useEffect(()=>{
        fetch(`https://true-goose-88624.herokuapp.com/task/${_id}`)
        .then(res=>res.json())
        .then(data=>setTaskcom(data))
    },[_id])
    
    return [taskCom];
};

export default useTask;