function validate (userData){
    let errors = {}

    if(!userData.email){//el nombre de usuario no puede estar vacio
        errors.email = "Enter your email"
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/){//el email debe contener un arroba y un punto
        errors.email = "Invalid email"
    }

    if(userData.email.length >= 35){//el email no puede tener más de 35 caracteres
        errors.password = "Invalid email"
    }

    if(!/\d/.test(userData.password)){
        errors.password = "Password must contain a letter"
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Password must be between 6 and 10 characters"
    }

    return errors;
}

export default validate;

