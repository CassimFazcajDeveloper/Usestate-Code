import { useEffect, useState } from 'react';



function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The count is' + count)
  
    return () => {
      console.log("its just a clean up console")
    }
  }, [count])
  return (
    <div>
   <h1> Count : {count}</h1>
   <button onClick={()=> setCount(count + 1)}>Increment</button> <span> </span>
   <button onClick={()=> setCount(count - 1)}>Decrement</button>
    </div>
  
  )
}

export default Demo;
 