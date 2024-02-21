import React, {useState, useEffect} from 'react'
import "./products.css"
const Products = () => {
  const [products, setProducts] = useState([])
/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("error fetching data", error);
      };
    };
    fetchData();
  }, [])*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data.products);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <section className='products-container container'>
         <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <img src={product.thumbnail} alt={`Product ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
    </section>
  )
}

export default Products