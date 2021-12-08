import React, {useState} from 'react';
import { Row, Col, Button, Table, Figure, Modal} from 'react-bootstrap'

function Products(props) {
    const { products, onAdd } = props;
   const [show, setShow] = useState(false);
   const [modalInfo, setModalInfo] = useState("")

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  
   const productDetails = (product) => {
    console.log(product)
    handleShow()
    setModalInfo(product)

  };
  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="center">Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>
      
        <p>Code: {modalInfo.code}</p>
        <p>Name: {modalInfo.name}</p>
        <p>Price: {modalInfo.price}</p>
        <p>Description: {modalInfo.description}</p>
      <Figure>
        <Figure.Image
          width={250}
          height={250}
          alt={modalInfo.name}
          src={modalInfo.image}
        />
      </Figure>
      
      
       </>
    
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
    )
  }

    return (
         <Row>
            <Col  md={12} >
            <Table>
              <tbody>
                <tr style={{width: '100%'}}>
                  <td style={{width: '20%'}}>
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt={products.name}
                        src={products.image}
                      />
                    </Figure></td>
                    <td style={{width: '20%'}}>{products.code} </td>
                  <td style={{width: '20%'}}>{products.name} </td>
                  <td style={{width: '10%'}}>{products.price}</td>
                  <td style={{width: '15%'}}> <Button onClick={() => onAdd(products)}>Add To Cart</Button></td>
                  <td style={{width: '10%'}}> <Button variant="info" onClick={() => productDetails(products)} >View Product</Button></td>
                </tr>
              
              </tbody>
            </Table>
            {show ? <ModalContent/> : null}
            </Col>

        </Row>
        
           );
}

export default Products;