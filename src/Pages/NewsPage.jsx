import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import NewsProvider, { useStateValue } from "../context/newsContext";
import { FaStar } from "react-icons/fa";
import Header from "../Components/Header";
const News = () => {
  const { wishlist, setwishlist } = useStateValue();
  const navigate = useNavigate(); 
  // useEffect(() => {
  //   const storedWishlist = localStorage.getItem("wishlist");
  //   if (storedWishlist) {
  //     setwishlist(JSON.parse(storedWishlist)); 
  //   }
  //   localStorage.setItem('wishlist',JSON.stringify(wishlist))
  // }, [wishlist]);
  const handleWishlist = (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);

    if (isProductInWishlist) {
      const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      setwishlist(updatedWishlist);
      // sessionStorage.setItem("wishlist", JSON.stringify(updatedWishlist));  
    } else {
      const updatedWishlist = [...wishlist, product];
      setwishlist(updatedWishlist);
      // sessionStorage.setItem("wishlist", JSON.stringify(updatedWishlist));  
    }
  };

  return (
    <>
      <Header />
      <p>{wishlist.length}</p>
      <div className="product-grid">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="grid">
              <button
                style={{
                  width: "100px",
                  height: "30px",
                  backgroundColor: "bisque",
                  borderRadius: "8px",
                }}
              >
                Супер цена
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWishlist(product);
                }}
                className="yur"
              >
                Like
              </button>
            </div>
            <img
              style={{
                width: "150px",
                height: "130px",
                marginLeft: "60px",
              }}
              src={product.images[0] || "default-image.jpg"}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <div>
              <div className="star">
                <p>
                  Rating: {product.rating} <FaStar size={15} color="orange" />
                </p>
              </div>
            </div>
            <p>{product.title}</p>
            <p
              style={{
                color: "blue",
              }}
            >
              Price: ${product.price}
            </p>
            <div className="kupit">
              <button className="btn-0">Harid qilish</button>
              <button className="btn-1">Click</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;

