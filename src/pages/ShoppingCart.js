import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slideshow from "../components/Slideshow";
import {products} from "../products/products";
const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box sx={{ padding: 3, backgroundColor: "#F5F5F5", borderRadius: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 700, color: "#333", textAlign: "center" }}
      >
        {cart.length === 0 ? "Your cart is empty" : "Your cart"}
      </Typography>
      
      {cart.length === 0 ? (
        <Slideshow  images={products.map((item) => item.image)}  />
        
      ) : (
        <>
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    padding: 1,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div style={{ backgroundColor: "white" }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: { xs: "100%", md: 120 },
                        height: 120,
                        objectFit: "contain",
                        borderRadius: 1,
                        marginBottom: { xs: 1, md: 0 },
                        marginRight: { xs: 0, md: 2 },
                      }}
                      image={item.image}
                      alt={item.title}
                    />
                  </div>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ marginBottom: 1 }}
                    >
                      {item.description}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      Quantity:
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          marginTop: 1,
                        }}
                      >
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          min="1"
                          style={{
                            width: "50px",
                            textAlign: "center",
                            borderColor: "#E6A23C",
                            borderRadius: "4px",
                            backgroundColor: "#FFF",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            padding: "5px",
                          }}
                        />
                      </Box>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: 1, fontWeight: 700 }}
                    >
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => removeItem(item.id)}
                      sx={{
                        mt: 1,
                        backgroundColor: "#E6A23C",
                        ":hover": {
                          backgroundColor: "#D1A128",
                        },
                        borderRadius: 1,
                      }}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
                
              </Grid>
            ))}
            
          </Grid>

          
          <Divider sx={{ marginY: 2 }} />
          
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#333", textAlign: "right" }}
          >
            Total: ${total.toFixed(2)}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearCart}
              sx={{
                backgroundColor: "#E6A23C",
                ":hover": {
                  backgroundColor: "#D1A128",
                },
                borderRadius: 1,
              }}
            >
              Clear Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                backgroundColor: "#E6A23C",
                ":hover": {
                  backgroundColor: "#D1A128",
                },
                borderRadius: 1,
              }}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
      
    </Box>
  );
};

export default ShoppingCart;