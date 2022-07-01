import React, { useEffect, useState } from 'react';

const CompleteTask = () => {
    const [cTask,setCtask]=useState([]);
    useEffect(() => {
        fetch('https://true-goose-88624.herokuapp.com/complete')
            .then(res => res.json())
            .then(data => setCtask(data))
    }, []);
    console.log(cTask);

    return (
        <div class="mx-5 my-3">
            <h2 className='text-3xl mx-5 my-3'>Task Complete</h2>

            {
                cTask.map(t => 
                <div className='w-2/4 mx-5 flex' key={t._id}>
                    
                    <div className='px-5'>
                    <h2 className='text-xl font-medium'>{t.name}</h2>
                    <p>{t.description}</p>
                    
                    </div>
                    
                </div>)
            }


        </div>
    );
};

export default CompleteTask;