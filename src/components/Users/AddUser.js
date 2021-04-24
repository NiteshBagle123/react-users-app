import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [ enteredUserName, setUserName] = useState('');
    const [ enteredAge, setAge] = useState('');
    const [ error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if(!enteredUserName.trim().length || !enteredAge.trim().length){
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name and age(non-empty values)'
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter age greater than 0'
            });
            return;
        }

        props.addUser(enteredUserName, enteredAge);
        setUserName('');
        setAge('');
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModal {...error} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input 
                    id="username" 
                    type="text" 
                    onChange={userNameChangeHandler}
                    value={enteredUserName}
                />
                <label htmlFor="age">Age(Years)</label>
                <input 
                    id="age" 
                    type="number"
                    onChange={ageChangeHandler}
                    value={enteredAge}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    );
};

export default AddUser;