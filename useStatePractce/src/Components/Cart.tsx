import React from 'react'

interface Props {
  CartItems : string[],
  OnClear : () => void
}

const Cart = ( {CartItems, OnClear }: Props) => {
  return (
    <div>
      <h1>Cart Section</h1>
      {CartItems.map(items => <li key={items}>{items}</li>)}
      <button onClick={OnClear}></button>
    </div>
  )
}

export default Cart
