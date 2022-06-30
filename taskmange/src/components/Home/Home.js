import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
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