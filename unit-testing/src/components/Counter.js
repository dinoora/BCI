import React, {useState} from 'react'

const Counter =() =>{
    const [counter, setCounter] = useState(4);

    const incrementCounter = ()=>{
        setCounter((prevCounter) => prevCounter+1)
    }

    const decrementCounter = ()=>{
        setCounter((prevCounter) => prevCounter-1)
    }

    return (
        <div className="counter">
            <button onClick={incrementCounter} data-testid="increment">+</button>
            <p data-testid="counter">{counter}</p>
            <button onClick={decrementCounter} data-testid="decrement">-</button>

        </div>
    )
}
export default Counter