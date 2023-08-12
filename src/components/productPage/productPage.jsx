import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectSvg from "../selectCategory/selectSvg";
import { useParams } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import PhoneCarousels from "../carousel/phoneCarousel";
import Tabs from "../tabs/tabs";
import htppPanel from "../../network/htpp-panel";
function ProductPage() {
  const [data, setData] = useState(null);
  const [style, setStyle] = useState(false);
  let productId = useParams().id;

const addProductToCart=(id)=>{
  htppPanel.post(`/addtocart/${id}`) 
  .then(response => {
    console.log(response)
    })
    .catch(error => {
      console.error("Error:", error);
    });}


  useEffect(() => {
    htppPanel.get(`/${productId}`) 
    .then(response => {
       setData(response.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });  }, [setData]);
  const handleClickLike = () => {
    setStyle(!style);
  };
  if (data) {
    return (
      <section className="product_page_section">
        <div className="product_page_nav">
          <NavLink className="return_btn" to="/">
            <SelectSvg id="arrow" />
          </NavLink>
          <h3 className="product_detail_title">Product Details</h3>
          <NavLink className="basket_btn" to="/basket">
            <SelectSvg id="basket" />
          </NavLink>
        </div>
        <PhoneCarousels data={data.img} />

        <div className="about_product">
          <div className="product_card">
            <h1 className="product_title">{data.title}</h1>
            <button
              className={`like_btn ${style ? "active_like" : ""}`}
              onClick={handleClickLike}
            >
              <SelectSvg id="like" />
            </button>
            <button className="buy_product_btn" onClick={()=>{addProductToCart(data._id)}}>
         <SelectSvg id="buy" />
         </button>
          </div>
         
          <Tabs data={data} />
        </div>
      </section>
    );
  }
}
export default ProductPage;
