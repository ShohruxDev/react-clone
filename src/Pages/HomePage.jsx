import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useStateValue } from "../context/newsContext";
import "./HomePage.css";
import CustomCarousel from "../Components/Carousel";
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import imk from "../assets/cart-single.svg";
import iml from "../assets/heart.svg"
const HomePage = ({ products, cart, setCart }) => {
  const [issModalOpen, setIssModalOpen] = useState(false);
  const navigate = useNavigate();
  const { setwishlist, wishlist } = useStateValue();
  const { setwishlistt, wishlistt } = useStateValue();
  const handlwishlistt = (product) => {
    const issomewishlistt = wishlistt.some((item) => item.id === product.id);
    if (issomewishlistt) {
      setwishlistt(wishlistt.filter((item) => item.id !== product.id));
    } else {
      setwishlistt([...wishlistt, product]);
    }
  };
  const handlwishlist = (product) => {
    const issomewishlist = wishlist.some((item) => item.id === product.id);
    if (issomewishlist) {
      setwishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setwishlist([...wishlist, product]);
    }
  };

  return (
    <div>
      <CustomCarousel products={products} />
      <div className="product-grid">
        {products.map((product) => (
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
                  border:"none"
                }}
              >
                Супер цена
              </button>
              <img style={{
                cursor:'pointer'
              }} onClick={(e) => {
                e.stopPropagation();
                handlwishlist(product)
              }} src={iml} alt="" />
            
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
                <p>
                  Rating: {product.rating} <FaStar size={15} color="orange" />
                </p>
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
              <button style={{
                border:"none"
              }} className="btn-0">Harid</button>
              <button style={{
                border:"none",
                padding:'5px 7px'
              }}
                onClick={(e) => {
                  e.stopPropagation();
                  setCart([...cart, product]);
                }}
                className="btn-1"
              >
                <img src={imk} alt="" />
              </button>
              <button style={{
                border:'none'
              }}
                onClick={(e) => {
                  e.stopPropagation();
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
    </div>
  );
};

export default HomePage;
