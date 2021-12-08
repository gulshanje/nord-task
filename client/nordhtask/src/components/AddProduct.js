import React, {useState} from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
const AddProduct = (props) => {
  
   const [code, setCode] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [description, setDescription] = useState("");
   const [image, setImage] = useState("");
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { data, setData, setProduct } = props
  
 
   async function addProduct() {
    console.warn(code, name, price, description, image)
    const formData = new FormData();
    formData.append('code', code);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);
    try {
        const response = await axios({
          method: "post",
          url: "http://localhost:8000/api/v1/products/create/",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response.data)
        setData(response.data)
        setProduct(response.data)
        console.log(data)
      } catch(error) {
        console.log(error)
      }
      handleClose()
    }

    return (
        <div>
        <Button variant="btn btn-success" onClick={handleShow} >  Add Product </Button>
      
      <Modal className="modelColor" show={show} onHide={handleClose} >
        <Modal.Header closeButton className="modelColor">
          <Modal.Title className="productName">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
        <Form.Group controlId="code" className="mb-3">
            <Form.Control type="text" placeholder="Code"  onChange={(e) => setCode(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="name" className="mb-3">
            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="price" className="mb-3">
            <Form.Control type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
            <Form.Control onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            placeholder="Description"
            style={{ height: '50px' }}
            />
        </Form.Group>
            <Form.Group controlId="image" className="mb-3">
        
            <Form.Control type="file"  onChange={(e) => setImage(e.target.files[0])} />
        </Form.Group>
        
         </>
      
        </Modal.Body>
        <Modal.Footer className="modelColor">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    )
  };
  
  export default AddProduct;