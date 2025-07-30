import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('prints after every second');
    }, 1000);

    console.log("Count Updated");

    return () => {
      clearInterval(timer);
      console.log('****Clear****');
    };
  }, [count]);

  return (
    <div>
      <h2 className="mb-3">COUNT: {count}</h2>
      <div className="d-flex gap-3">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
