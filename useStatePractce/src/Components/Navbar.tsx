

interface Props {
    cartItemsCount : number;
}

const Navbar = ( {cartItemsCount}: Props) => {
  return (
    <div>
      <h1>Count Cart Items</h1>
      {cartItemsCount}
    </div>
  )
}

export default Navbar
