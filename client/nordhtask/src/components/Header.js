import React from 'react';
 
function Header(props) {
  const {products, setProducts, data, cartItems  } = props;
  const itemsCount = cartItems.reduce((a, c) => a + c.qty, 0);
  console.log("This is cart items")
  console.log(itemsCount)
    return (
      <>
      <div className="header">
        <h1>Nord Task</h1>
        <h2>Djangom, React, MySQL and REST API</h2>

      </div>
        </>
      );
}

export default Header