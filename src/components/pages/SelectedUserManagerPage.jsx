import { useEffect, useState,useParams } from "react";
import htppPanel from "../../network/htpp-panel";
import { NavLink } from "react-router-dom";
import SelectSvg from "../selectCategory/selectSvg";

export default function SelectedUserManagerPage() {

    const [data,setData]=useState();
    const [usersGoods,setUsersGoods]=useState(null);


    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const id = urlParts[urlParts.length - 1];


    const getCartProduct= (idsArray)=>{
      if(idsArray && data){
        htppPanel.get("/user/product/cart",{params:{ids:idsArray}}) 
        .then(response => {
           setUsersGoods(response.data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
      }
    
    }
   
    
    useEffect(()=>{
        if(!data){
            htppPanel.get(`/auth/user/cart/${id}`,) 
            .then(response => {
               setData(response.data);
              })
              .catch(error => {
                console.error("Error:", error);
              });
            }
            if(data && data.product){
              getCartProduct(data.product);
            }
           
    },[data])
    return(
        <div className="manager_container">
            <div className="manager_heder">
            <NavLink className="return_btn" to="/managerPage">
              <SelectSvg id="arrow" />
            </NavLink>
            {data &&  <h4>User:{data.user}</h4>}
            </div>
          { usersGoods && usersGoods.map((usersGoods)=>(
            <div key={usersGoods._id} className="manager_product_card">
              <img src={usersGoods.img[0]} alt={usersGoods.title}  className="manager_product_img"/>
              <h4>{usersGoods.title}</h4>
              <p>{usersGoods.price}</p>
            </div>
          )) }
        </div>
    );
}