import { useState } from "react";

export const HooksApp = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }
   
  return (
    <div>
      <h1> HooksApp </h1>

      <button onClick={handleClick}> Click me! </button>

      <p>{count}</p>
    </div>
  );
};
