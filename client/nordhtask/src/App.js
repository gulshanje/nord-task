import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductTable from './components/ProductTable';
import AddProduct from './components/AddProduct';
function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
 const itemsCount = cartItems.reduce((a, c) => a + c.qty, 0);
  const [sortType, setSortType] = useState('name');
 
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [order, setOrder] = useState("ASC");
 

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

  const url = 'http://localhost:8000/api/v1/products/';

  const getAllProducts = () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.get(url, {
      headers: headers
      })
    .then((response) => {
      const allProducts = response.data
      setProducts(allProducts)
      setData(allProducts)
      console.log(allProducts)
    })
    .catch(error => console.error(`Error: ${error}`))
  }
  useEffect(() =>  getAllProducts(), [])
 

useEffect(() => {
  const sortItem = type => {
    const types = {
      name: 'name',
      price: 'price',
    };
    const sortProperty = types[type];
    const sorted = [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
    setFilteredResults(sorted);
    console.log(sortProperty)
    console.log("This is sort")
    console.log(sorted)
  };

  sortItem(sortType);
}, [sortType]);

function search(rows) {
  return rows.filter((row) =>
    row.code.toLowerCase().indexOf(q) > -1 ||
    row.name.toLowerCase().indexOf(q) > -1 
  );
}

function sort(rows) {
  return rows.sort((row) =>

    row.name.toLowerCase().indexOf(q) > -1 ||
    row.price.toLowerCase().indexOf(q) > -1 
  );
}



  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [show, setShow] = useState(false);

  const columns = data[0] && Object.keys(data[0]);


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
          <Header products={products} data={data} setData={data} cartItems={cartItems}/>
          
            </div>
          </div>
        <div className="row">
          <div className="col-sm-6 searchBox">
            <input className="form-control paraText" placeholder="product code or name ..."
          type='text'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
          </div>
          <div className="col-sm-2 searchBox ">
          <AddProduct products={products}  data={data} setProducts={setProducts}/>
          </div>
          
        </div>
        <div className="row">
          <div className="col-sm-8">
          <ProductTable data={search(data)} setData={setData}   onAdd={onAdd} />
          </div>
          <div className="col-sm-4 ">
          <Cart  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} /> 
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
