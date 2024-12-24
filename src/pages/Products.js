import React, { useEffect } from "react";
import "./Products.css"; // Assuming you've created a CSS file for this component
import MyCard from "../components/Card-product";
import { useDispatch } from "react-redux";
import { products } from "../products/products";
import { addItem } from "../redux-attitude/action/action";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Products = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [priceRange, setPriceRange] = useState(1000);

  useEffect(() => {
    const uniqueCategories = [];
    products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    });
    setCategories(uniqueCategories);
  }, []);

  function addToCart(product) {
    dispatch(addItem(product.id, product.price, 1, product.title));
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Default to an empty array if no cart exists
    let existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function filterSelectedCaregory(category) {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  const sortedProducts = products
    .filter(
      (product) =>
        selectedCategory.length === 0 ||
        selectedCategory.includes(product.category)
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return 0;
    })
    .filter((product) => product.price <= priceRange);

  return (
    <div>
      <Box component="div" className="slider-container" sx={{ width: "25%", padding: 2, margin: "0 auto" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Products
        </Typography>
        <Slider
          value={priceRange}
          onChange={(e, value) => setPriceRange(value)}
          step={10}
          min={0}
          max={1000}
          defaultValue={priceRange}
          aria-label="Default"
          valueLabelDisplay="auto"
          
        />
      </Box>
      <div
        className="categories-container"
        style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}
      >
        {categories.map((category, index) => (
          <Button
            onClick={() => filterSelectedCaregory(category)}
            key={index}
            variant={selectedCategory.includes(category) ? "contained" : "outlined"}
            sx={{ margin: 0.5, fontSize: '0.75rem' }} /* Smaller button size for phone */
          >
            {category}
          </Button>
        ))}
        
      </div>
      <div className="products-container">
        <div className="products-grid">
          {sortedProducts.map((product, index) => (
            <MyCard
              onBuy={() => addToCart(product)}
              key={index}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
