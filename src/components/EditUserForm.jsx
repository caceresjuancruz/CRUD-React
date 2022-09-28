import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {
    
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data);
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

            <button>Edit user</button>
        </form>
    );
}
 
export default EditUserForm;