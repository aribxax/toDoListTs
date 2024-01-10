import React, { MouseEvent } from 'react';


    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(e);
    }


function TodoList() {
    return (
        <>
            
            <form>
                    <input type='text' placeholder='New item'></input>
                    <button type='submit' onClick={e => handleMouseEvent(e)}>Add</button>
            </form>
            <div style={{backgroundColor:'grey',height:'40vh', width:'40vh'}}>

            </div>
        </>
    );
}

export default TodoList;