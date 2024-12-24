import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const navigate = useNavigate(); 
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);
  
  return (
    <div
    onClick={() => navigate("/products")}
      style={{
        position: "relative",
        maxWidth: "300px", 
        height: "200px",
        margin: "auto",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#ffffff",
        cursor: "pointer",
        
      }}
    >
      {images.map((image, index) => (
        <div
          className="slide"
          
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: index === currentIndex ? "0" : "100%",
            zIndex: index === currentIndex ? 1 : 0,
            width: "100%",
            height: "100%",
            transition: "left 1s ease-in-out",
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Ensures images are displayed cleanly
              borderRadius: "8px",
              
            }}
            loading="lazy"
            decoding="async"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
          />
        </div>
      ))}
      
    </div>
  );
};

export default Slideshow;
