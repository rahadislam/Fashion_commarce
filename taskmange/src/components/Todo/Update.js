import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Update = () => {
    const {id}=useParams();
    const { register, handleSubmit ,reset} = useForm();
    const navigate=useNavigate()

    const onSubmit = data => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                reset();
                toast.success('Successfully update Task');
                navigate('/todo');

            })
        
    }

    return (
        <div className='w-96 mx-auto'>
            <h1 className='text-center font-bold text-2xl'>Update Task</h1>
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
                <input className='btn btn-primary  text-white' type="submit" value="Update" />
            </form>

        </div>
    );
};

export default Update;