import React from "react";
import axios from "axios";
function renderItem(props) {
  const productData = props.props;
  const handleClick = async (e) => {
    
  };
  if (productData) {
    return (
      <div className="product_container">
        <h2 className="product_title">{productData.title}</h2>
        <img src={productData.img[0]} alt={productData.title} className="admin_img" />
        <button className="delete_btn"
          type="button"
          onClick={() => {
            handleClick(productData._id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default renderItem;
