import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
// import Wrapper from '../Helpers/Wrapper';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [ enteredUserName, setUserName] = useState('');
    // const [ enteredAge, setAge] = useState('');
    const [ error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(!enteredUserName.trim().length || !enteredUserAge.trim().length){
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name and age(non-empty values)'
            });
            return;
        }

        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter age greater than 0'
            });
            return;
        }

        props.addUser(enteredUserName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setUserName('');
        // setAge('');
    }

    // const userNameChangeHandler = (event) => {
    //     setUserName(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value)
    // }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <>
        {error && <ErrorModal {...error} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input 
                    id="username" 
                    type="text" 
                    // onChange={userNameChangeHandler}
                    // value={enteredUserName}
                    ref={nameInputRef}
                />
                <label htmlFor="age">Age(Years)</label>
                <input 
                    id="age" 
                    type="number"
                    // onChange={ageChangeHandler}
                    // value={enteredAge}
                    ref={ageInputRef} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    );
};

export default AddUser;