import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, increaseQuantity, decreaseQuantity, removeFromCart, getTotal, addToCart, removeFromWishlist } = useCart();
  const total = getTotal();

  // Mock-Produkt Daten für Wishlist (später aus API)
  const allProducts = [
    { id: 1, title: "Wireless Headphones", price: 99.99, image: "https://via.placeholder.com/100" },
    { id: 2, title: "Smart Watch", price: 199.99, image: "https://via.placeholder.com/100" },
    { id: 3, title: "Gaming Mouse", price: 49.99, image: "https://via.placeholder.com/100" },
    { id: 4, title: "Bluetooth Speaker", price: 79.99, image: "https://via.placeholder.com/100" }
  ];

  const wishlistProducts = allProducts.filter(product => state.wishlist.includes(product.id));

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Cart Items
              </Typography>
              
              <List>
                {state.items.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemAvatar>
                      <Avatar 
                        src={item.image} 
                        variant="rounded"
                        sx={{ width: 60, height: 60 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <IconButton 
                            size="small" 
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <Remove />
                          </IconButton>
                          <Typography>Qty: {item.quantity}</Typography>
                          <IconButton 
                            size="small" 
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <Add />
                          </IconButton>
                          <Typography sx={{ ml: 1 }}>× ${item.price}</Typography>
                        </Box>
                      }
                      sx={{ ml: 2 }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <Typography variant="h6">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                      <IconButton 
                        size="small" 
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        sx={{ mt: 1 }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </ListItem>
                ))}
              </List>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5">Total:</Typography>
                <Typography variant="h4" color="primary">
                  ${total.toFixed(2)}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Shipping Address
              </Typography>
              
              <Box component="form" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth label="First Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth label="Address Line 1" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth label="City" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth label="ZIP Code" />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Payment Details
              </Typography>
              
              <Box component="form" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Card Number"
                      placeholder="1234 5678 9012 3456"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Expiry Date"
                      placeholder="MM/YY"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="CVV"
                      placeholder="123"
                    />
                  </Grid>
                </Grid>
                
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mt: 3 }}
                >
                  Place Order - ${total.toFixed(2)}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Wishlist Section */}
      {wishlistProducts.length > 0 && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Your Wishlist
            </Typography>
            
            <List>
              {wishlistProducts.map((product) => (
                <ListItem key={product.id}>
                  <ListItemAvatar>
                    <Avatar 
                      src={product.image} 
                      variant="rounded"
                      sx={{ width: 60, height: 60 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.title}
                    secondary={`$${product.price}`}
                    sx={{ ml: 2 }}
                  />
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                      variant="contained"
                      size="small"
                      onClick={() => addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image
                      })}
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outlined"
                      size="small"
                      color="error"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Cart;
