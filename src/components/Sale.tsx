import * as React from 'react';
import { useState, useEffect } from 'react'; 
import { Container, Grid } from '@mui/material'; 
import ProductCard from './ProductCard'; 

const Sale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Sale;
