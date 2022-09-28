import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);
        e.target.reset();
    }

    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                type="text"
                name="name"
                {...register("name", {
                    required: {value: true, message: "Required field"},
                    minLength: {value: 2, message: "Must contain at least 2 characters"} 
                    })} 
            />

            {errors.name &&
                <div style={{color: '#fd010d'}} >
                    {errors.name.message}
                </div>
            }

            <label>Username</label>
            <input 
                type="text" 
                name="username" 
                {...register("username", {
                    required: {value: true, message: "Required field"} ,
                    minLength: {value: 2, message: "Must contain at least 2 characters"}
                    })}        
            />

            {errors.username &&
                <div style={{color: '#fd010d'}} >
                    {errors.username.message}
                </div>
            }

            <button>Add new user</button>
        </form>
    );
}
 
export default AddUserForm;