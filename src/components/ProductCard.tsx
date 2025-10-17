import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card sx={{ width: 275, height: 400 }}>
      <CardMedia 
        sx={{ height: 275, objectFit: 'scale-down' }}
        image={product.image} 
        title={product.title}
      />
      <CardContent>
        <Typography>{product.title.length > 20 
        ? `${product.title.slice(0, 20)}...` 
        : product.title
         }</Typography>
        <Typography>${product.price}</Typography>
      </CardContent>
      <CardActions>
              <Button size="small">+ wishlist</Button>
              <Button size="small">+ cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard; 