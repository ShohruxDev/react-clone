import React, { useState, useEffect } from "react";
import img from "../assets/asaxiy-logo.svg";
import imgg from "../assets/image.png";
import imgk from "../assets/cart.svg";
import po from "../assets/language-uz.svg"
import so from "../assets/heart.svg"
import pol from "../assets/payment.svg"
import ty from "../assets/ty.svg"
import { useTranslation } from "react-i18next";
import "./Header.css";
let a = 0;
 
import api from "../api";
import { useStateValue } from "../context/newsContext";
import { NavLink, useNavigate } from "react-router-dom";
const Headerd = ({ setProducts, cart, setCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openismodal, modalopenset] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { wishlist } = useStateValue();

  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };


  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/zakaz")
  }
  useEffect(() => {
    if (searchTerm === "") return;
    const fetchProducts = async () => {
      try {
        const response = await api.get(
          `/search?q=${searchTerm}&category=${selectedCategory}`
        );
        console.log("API javobi:", response.data);
        if (response.data.products) {
          setProducts(response.data.products);
        } else {
          console.log("Mahsulotlar topilmadi");
        }
      } catch (error) {
        console.error("API xatosi:", error);
      }
    };
    fetchProducts();
  }, [searchTerm, selectedCategory, setProducts]);
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const setFiltr = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
      <img src={img} alt="Logo" />
      <button style={{
        border:'none'
      }} className="btnn">{t("header.tit")}</button>
      <div className="inputref">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          <option value="all">{t("header.tit0")}</option>
          <option value="electronics">{t("header.tit1")}</option>
          <option value="fashion">{t("header.tit2")}</option>
          <option value="books">{t("header.tit3")}</option>
          <option value="home">{t("header.tit4")}</option>
        </select>
        <input
          value={searchTerm}
          onChange={setFiltr}
          className="inputt"
          type="text"
          placeholder="Qidiruv..."
        />
        <button style={{
        border:'none'
      }} className="btn">{t("header.tit5")}</button>
      </div>
      <div className="flex">
        <img src={ty} alt="" />
        <p>{t("header.lit")}</p>
      </div>
     
      <div className="lopi">
      <div style={{
        marginTop:'-8px'
      }} className="flex">
        <img style={{
          width:'40%',
          height:'50%'
        }} src={po} alt="" />
        <p>{t("header.title")}</p>
        <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="uz">O'zbekcha</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
      </div>
      <div style={{
        marginTop:'1px'
      }} className="flex">
        <img style={{
        }} src={pol} alt="" />
        <p>{t("header.lit0")}</p>
      </div>
      </div>
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'5%'
      }}  
        onClick={(e) => {
          modalopenset((prev) => !prev);
        }}
      >
        <img style={{
          width:'30%',
          height:'10%',
        }} src={imgk} alt="" />
        <p className="vyti">{t("header.lit1")}</p>
      </div>
      <div style={{
        width:'5%'
      }} className="flex">
        
        <img style={{
          width:'15%',
          height:'7%',
          marginTop:'10px'
        }} src={imgg} alt="" />
        <button style={{
        border:'none',
      }} onClick={() => setIsModalOpen((prev) => !prev)} className="tnb">
          <p className="vyti">{t("header.lit2")}</p>
        </button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>{t("header.lit2")}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="close-btn"
              >
                <p>{t("header.lit4")}</p>
              </button>
            </div>
          </div>
        )}
      </div>
      {openismodal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="w-[500px] bg-white p-6 rounded-lg shadow-lg">
            {cart && cart.length > 0 ? (
              cart.map((p, index) => (
                <div 
                  key={index}
                  className="klop"
                >
                  <img     
                    src={p.thumbnail}
                    alt={p.title}
                  />
                  <p className="lop-0">{p.title}</p>
                  <p className="lop-0">Price: {p.price}$</p>
                  <button onClick={()=>{
                    setCart([...cart.filter((pr)=>pr.id!=p.id)])
                  }} className="x-btn">x</button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">{t("header.lit5")}</p>
            )}
               <div className="summa">
                    <p>{t("header.lit6")}</p>
                    <span>{cart?.reduce((sum, item) => sum + (item.price || 0), 0)}сум</span>
                  </div>
                  <button onClick={handleClick} className=" ghjk w-[100%] col-end-4 bg-blue-500 h-[40px]">{t("header.lit7")}</button>    
            <button
              onClick={() => modalopenset(false)}
              className=" ghjkk mt-4 px-4 py-2   text-white rounded-lg w-full"
            >
              {t("header.lit8")}
            </button>
          </div>
        </div>
      )}
      {/* <NavLink to="/newss">Newss {wishlist.length}</NavLink> */}
      <NavLink style={{
          textDecoration:'none',
        }} to="/news"><div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }} className="flex">
        <img style={{
          textDecoration:'none',
        }} src={so} alt="" />
        <p style={{
          textDecoration:'none',
          marginTop:'5px'
        }}> {t("header.kit")}</p>
        </div><div className="polk">
        {wishlist.length}
          </div></NavLink>
    </header>
  );
};

export default Headerd;
