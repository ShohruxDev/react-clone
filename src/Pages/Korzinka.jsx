import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import NewsProvider, { useStateValue } from "../context/cartContext";
import { FaStar } from "react-icons/fa";
import Header from "../Components/Header";
const Newss = () => {
  const { wishlistt, setwishlistt } = useStateValue();
  const navigate = useNavigate();

  const handleWishlistt = (product) => {
    const isProductInWishlistt = wishlistt.some(
      (item) => item.id === product.id
    );

    if (isProductInWishlistt) {
      const updatedWishlistt = wishlistt.filter(
        (item) => item.id !== product.id
      );
      setwishlistt(updatedWishlistt);
    } else {
      const updatedWishlistt = [...wishlistt, product];
      setwishlistt(updatedWishlistt);
    }
  };

  return (
    <>
      <Header />
      <p>{wishlistt.length}</p>
      <div className="product-grid">
        {wishlistt.map((product) => (
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
              <button className="btn-0">Harid</button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn-1"
              >
                <img src={imk} alt="" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWishlistt(product);
                  setIssModalOpen((prev) => !prev);
                }}
                className="moda"
              >
                Modal
              </button>
              {issModalOpen && (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="modal-2"
                >
                  <div className="modal-content-2">
                    <p>{product.title}</p>
                    <img src={product.thumbnail} alt="" />
                    <p>{product.name}</p>
                    <button
                      onClick={() => setIssModalOpen(false)}
                      className="close-btn-2"
                    >
                      <p>Yopish</p>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Newss;
