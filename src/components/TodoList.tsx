/* import React, { FormEvent, useState, useEffect } from 'react';


interface Item {
   
}

const TodoList: React.FC<Item> = () => {


    const [ newItem, setNewItem ] = useState<string>('') 



    const handleFormEvent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(newItem)
    };

    const inputChange = (e: Item) => {
        setNewItem(`${Item}`)
    }


    return (
        <>
            
            <form onSubmit={handleFormEvent}>
                    <input type='text' placeholder='New item' onChange={inputChange}></input>
                    <button type='submit'>Add</button>
            </form>
            <div style={{backgroundColor:'grey',height:'40vh', width:'40vh'}}>

            </div> 
        </>
    );
}

export default TodoList; */



import React, { ChangeEvent, FormEvent, useState } from 'react';

interface MyComponentProps {
  // Define your component props here
}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Use the inputValue in your logic
    console.log('Input Value:', inputValue);
    // Add further logic here
  };

  return (
    <form onSubmit={handleFormEvent}>
      <input type='text' placeholder='New item' value={inputValue} onChange={inputChange} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default MyComponent; 