import React, {useState} from 'react';
import {Button, Figure, Modal, Form} from 'react-bootstrap'
 
export default function ProductTable(props) {
    const { onAdd, data, setData } = props;
    //const columns = data[0] && Object.keys(data[0]);
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState("")
    const [order, setOrder] = useState("ASC");
   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const productDetails = (data) => {
        console.log(data)
        handleShow()
        setModalInfo(data)

    };
    const sorting = (col) => {
        if (order === "ASC") {
        const sorted = [...data].sort((a,b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted)
        setOrder("DSC")
        }
        if (order === "DSC") {
        const sorted = [...data].sort((a,b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setData(sorted)
        setOrder("ASC")
        }
    }
    
    const sortingPrice = (col) => {
        if (order === "ASC") {
        const sorted = [...data].sort((a,b) =>
        Number(a[col]) >  Number(b[col]) ? 1 : -1
        );
        setData(sorted)
        setOrder("DSC")
        }
        if (order === "DSC") {
        const sorted = [...data].sort((a,b) =>
        Number(a[col]) < Number(b[col]) ? 1 : -1
        );
        setData(sorted)
        setOrder("ASC")
        }
    }
    

   const ModalContent = () => {
    return (
      <Modal  className="modelColor" show={show} onHide={handleClose}>
      <Modal.Header closeButton className="modelColor">
        <Modal.Title className="productName">Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>

      <Form.Group controlId="code" className="mb-3 paraText">
            <Form.Control type="text" placeholder="Code"  value= {modalInfo.code}  disabled = {true} />
        </Form.Group>
        <Form.Group controlId="name" className="mb-3 paraText">
            <Form.Control type="text" placeholder="Name" value = {modalInfo.name}  disabled = {true}  />
        </Form.Group>
        <Form.Group controlId="price" className="mb-3 paraText">
            <Form.Control type="text" placeholder="Price" value={modalInfo.price}  disabled = {true}  />
        </Form.Group>

        <Form.Group controlId="description" className="mb-3 paraText" >
            <Form.Control as="textarea"  style={{ height: '50px' }} value={modalInfo.description}  disabled = {true}/>
        </Form.Group>
            <Form.Group controlId="image" className="mb-3">
        
            <Figure>
        <Figure.Image
          width={250}
          height={250}
          alt={modalInfo.name}
          src={modalInfo.image}
        />
      </Figure>
        </Form.Group>
   
      
      
       </>
    
      </Modal.Body>
      <Modal.Footer className="modelColor">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
    )
  }
  return (
      <>
    <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Code</th>
      <th scope="col" >
      <button class="btn"  onClick={() => sorting('name')}><i class="fa fa-arrows-v "></i> Name</button>
      </th>
      <th scope="col"> <button class="btn"  onClick={() => sortingPrice('price')}><i class="fa fa-arrows-v "></i> Price</button></th>
      <th scope="col" rowSpan="2"></th>
      
    </tr>
  </thead>
    <tbody>
    {data.map((row) => (
      <tr style={{width: '100%'}}>
        <td style={{width: '20%'}}>
          <Figure>
            <Figure.Image
              width={125}
              height={125}
              alt={row.name}
              src={row.image}
            />
          </Figure></td>
          <td className="paraText" style={{width: '20%'}}>{row.code} </td>
        <td className="productName" style={{width: '20%'}}>{row.name} </td>
        <td style={{width: '10%'}}>{row.price}</td>
        <td style={{width: '15%'}}> <Button  variant="light"  onClick={() => onAdd(row)} ><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></Button></td>
        <td style={{width: '10%'}}> <Button  variant="light" onClick={() => productDetails(row)} ><i class="fa fa-address-card fa-2x" aria-hidden="true"></i></Button></td>
      </tr>
      ))}
    
    </tbody>
  </table>
  {show ? <ModalContent/> : null}
    </>
  );
}