import { useState } from "react";
import validate from "./Validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({//estado local userData
        email: '',
        password: ''
    })

    function handleChange(event){
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({ ...userData, [event.target.name]: event.target.value }));
    };
    
    const [errors, setErrors] = useState({})//estado local Errors


    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input name="email" type="email" placeholder="Email" value={userData.email} onChange={handleChange}></input>
            {errors.email && <span>{errors.email}</span>}
            <br/>
            
            <label htmlFor='password'>Password:</label>
            <input name="password" type="password" placeholder="Password" value={userData.password} onChange={handleChange}></input>
            {errors.password && <span>{errors.password}</span>}
            <br/>
            
            <button>Submit</button>
        </form>
    )
}

export default Form;