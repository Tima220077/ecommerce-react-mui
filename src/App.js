import "./App.css";
import About from "./pages/About";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {products} from './products/products'
const arr = [
  { element: <Home />, path: "/" },
  { element: <Products />, path: "/products" },
  { element: <ShoppingCart />, path: "/cart" },
  { element: <About />, path: "/about" },
  
];
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {arr.map((el) => {
          return <Route path={el.path} element={el.element} />;
        })}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
