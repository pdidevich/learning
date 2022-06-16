import React, {useState} from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(count + 1)
    }

    function decrementCount() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
};

export default Counter;