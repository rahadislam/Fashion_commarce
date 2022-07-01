import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Home = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://true-goose-88624.herokuapp.com/task', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
        .then(res=>res.json())
        .then(inserted=>{
        reset();
        toast.success('Successfully Added Task  ');
        })
        
    }
    return (
            <div className='w-96 mx-auto'>
            <h1 className='text-center font-bold text-2xl'>Add Task</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Title"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name")}
                        required
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Your description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description")} required
                    />
                </div>
                            <br />
                <input className='btn btn-primary  text-white' type="submit" value="ADD NOW" />
            </form>

        </div>
    );
};

export default Home;