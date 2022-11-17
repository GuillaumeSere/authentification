import React, { useRef, useState } from 'react';
import Button from '../UI/Button/Button';
import classes from './authForm.module.css';
import ErrorModal from '../UI/ErrorModal/ErrorModal';

const AuthForm = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [error, setError] = useState(null);
   
    const submitHandler = (event) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //control si input vide
        if (enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0){
            setError({
                title: "Un ou plusieur champs sont vides",
                message: "Entrer votre email et/ou votre mot de passe"
            })
            return;
        }

        //control validité email avec regex
        const regExEmail = (value) => {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        }

        if (!regExEmail(enteredEmail)){
            setError({
                title: "Email invalide",
                message: "Entrer un email valide"
            })
            return;
        }

        console.log(enteredEmail, enteredPassword)
     
        //pour vider les champs
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
       {error && <ErrorModal 
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
        />}
            <section className={classes.auth}>
                <h1>Se connecter</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="email">Votre email</label>
                        <input type="text" id="email" ref={emailInputRef} />
                    </div>

                    <div className={classes.control}>
                        <label htmlFor="password">Votre mot de passe</label>
                        <input type="password" id="password" ref={passwordInputRef} />
                    </div>

                    <div className={classes.actions}>
                      <Button type="submit" onClick={() => {}}>
                        Se connecter
                        </Button>
                    </div>

                </form>
            </section>
        </>
    )
}

export default AuthForm;
