import React from "react";
import SelectSvg from "../selectCategory/selectSvg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import htppPanel from "../../network/htpp-panel";
function BasketPage() {

const [data,setData]=useState(null);
const [products,setProduct]=useState([]);


const logOut=()=>{
  htppPanel.post(`/logout`) 
  .then(response => {
    console.log(response);
    localStorage.clear("auth");
    localStorage.clear("token");

    })
    .catch(error => {
      console.error("Error:", error);
    });
}

const deleteFromCart=(id)=>{
  htppPanel.delete(`/deleteincart/${id}`) 
  .then(response => {
    console.log(response);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}


const getCartProduct= (idsArray)=>{
  if(idsArray && data){
    htppPanel.get("user/product/cart",{params:{ids:idsArray}}) 
    .then(response => {
       setProduct(response.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }

}

  useEffect(() => {
  
    if(!data){
      htppPanel.get(`/auth/user/cart/`) 
      .then(response => {
         setData(response.data);
         getCartProduct()
        })
        .catch(error => {
          console.error("Error:", error);
        });
      }
      if (data && data.product) {
        getCartProduct(data.product);
      }
     
      
    }, [data]);

     
     


    return (
      <>
          <section className="basket_section">
             <nav>
          <ul className="basket_nav_list">
          <li className="basket_list_item">
            <NavLink className="return_btn" to="/">
              <SelectSvg id="arrow" />
            </NavLink>
          </li>
          <li className="basket_list_item"> <p className="add_address_text">log out</p><button className="address_btn" onClick={()=>{logOut()}}><SelectSvg id="logout"/></button></li>
           </ul>
          </nav>
            <h2 className="basket_title">My Cart</h2>
            {products.length<=0 && <h1>your carts empty</h1>}

            <div className="basket_card">
              
              <ul className="my_cart_info_list my_cart_product_list">
              {products && products.map((product) => (

                <li key={product._id} className="phone_cards product_cart_item">
                  <NavLink to={`/selectProduct/${product._id}`} className="select_item"> {/* Додано ідентифікатор продукту */}
                    <img src={product.img[0]} alt={product.title} className="cards_img" />
                    <ul className="phone_cards_list">
                      <li>
                        <p className="phone_price">
                          {product.price} <span className="curency_price">₴</span>
                        </p>
                       
                      </li>
                      <li>
                        <p className="phone_title">{product.title}</p>
                      </li>
                    </ul>
                  </NavLink>
                  <button className="trash_btn" onClick={()=>{deleteFromCart(product._id)}}>
                        <SelectSvg   id="trash"  />
                        </button>
                </li>
                        ))}

              </ul>
              <li className="my_cart_info_list_item"><p className="cart_total_info">Total</p><p className="price_and_delivery">$333333</p></li>
              <li className="my_cart_info_list_item"><p className="cart_total_info">Delivery</p><p className="price_and_delivery">free/nohalyava</p></li>
              <button className="checkout_btn">Checkout</button>
            </div>
          </section>

          
      </>
    );
    
}
export default BasketPage;
