import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap'

function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const itemsCount = cartItems.reduce((a, c) => a + c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="block col-10 ">
      <h2><i class="fa fa-cart-plus" aria-hidden="true"> ( {itemsCount}) </i></h2>
      <p></p>
      <div>
       
        {cartItems.length === 0 && <div>Cart is empty</div>}
        
        {cartItems.map((item) => (
          <>
          <Container>
          <Row key={item.id}>
          <Col sm={12}>
           <h4>{item.name}</h4>
            
            </Col>
            <Col sm={4}>
            <Button   onClick={() => onRemove(item)}>
            <i class="fa fa-minus" aria-hidden="true"></i>
            </Button>
            
            </Col>
            <Col sm={4}>
            
            {item.qty} x {item.price.toFixed(2)}
            </Col>
            <Col sm={4}>
            <Button    onClick={() => onAdd(item)}>
            <i class="fa fa-plus" aria-hidden="true"></i>
            </Button>
            </Col>
          </Row>
          
        </Container>
        </>
         
        ))}

        <hr></hr>
        <p className="paraText">Summary</p>
        <hr></hr>
        {cartItems.length !== 0 && (
          <>

            <Container>
              <Row>
                <Col sm={8} className="paraText">Items Price
                </Col>
                <Col sm={4} className="paraText">{itemsPrice.toFixed(2)}
                </Col>
              </Row>
              <Row>
                <Col sm={8} className="paraText">Tax Price
                </Col>
                <Col sm={4} className="paraText" >{taxPrice.toFixed(2)}
                </Col>
              </Row>
              <Row>
                <Col sm={8} className="paraText">Shipping Price
                </Col>
                <Col sm={4} className="paraText">{shippingPrice.toFixed(2)}
                </Col>
              </Row>
              <Row>
                <Col sm={8} className="paraText" >Total Price
                </Col>
                <Col sm={4} className="paraText">{totalPrice.toFixed(2)}
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                <hr></hr>
                <Button className="btn btn-success" onClick={() => alert('Checkout! Need to be implemented')}>
                <i class="fa fa-shopping-cart fa-4x " aria-hidden="true"></i>
              </Button>
                </Col>
               
              </Row>
            </Container>
          </>
        )}
      </div>
    </div>
    );
}

export default Cart;