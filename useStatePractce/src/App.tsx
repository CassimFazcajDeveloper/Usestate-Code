import { useState } from 'react';



function Demo() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <h1>count : {count}</h1>
   <button onClick={()=> setCount(count + 1)}>Increment</button> <span> </span>
   <button onClick={()=> setCount(count - 1)}>Decrement</button>
    </div>
  
  )
}

export default Demo;
 