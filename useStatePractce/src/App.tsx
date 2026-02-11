
import { useState } from "react";
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';



const App = () => {
const [CartItems, setCartItems] = useState(['product 3','product1', 'product2'])

  return (
    <div>
      <Navbar cartItemsCount={CartItems.length}/>
      <Cart CartItems={CartItems} OnClear={() => setCartItems([])}/>
      
    </div>
  )
}

export default App
