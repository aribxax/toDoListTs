import React, { FormEvent, useState, useEffect } from 'react';




function TodoList() {


    const [ newItem, setNewItem ] = useState() 

    useEffect(() => {
    
    }, newItem)

    const handleFormEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log('holaa')
        console.log(newItem)
        console.log('nadaa')
    };

    const inputChange = (e: React.SetStateAction<string> ) => {
        setNewItem(e)
    }


    return (
        <>
            
            <form onSubmit={handleFormEvent}>
                    <input type='text' placeholder='New item' onChange={e => inputChange(e)}></input>
                    <button type='submit'>Add</button>
            </form>
            <div style={{backgroundColor:'grey',height:'40vh', width:'40vh'}}>

            </div>
        </>
    );
}

export default TodoList;