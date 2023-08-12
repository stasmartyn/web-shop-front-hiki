 import { useEffect, useState } from "react";
import htppPanel from "../../network/htpp-panel";
import { NavLink } from "react-router-dom";
 export default function ManagerPage() {
    const [data,setData]=useState();
    useEffect(()=>{
        if(!data){
            htppPanel.get("/auth/users") 
            .then(response => {
               setData(response.data);
              })
              .catch(error => {
                console.error("Error:", error);
              });
            }
    })
    return(
        <div className="manager_page_list_container">
            <ul className="manager_page_list">
                { data && data.map((user)=>(
                    <li key={user._id} className="manager_page_list_item" >
                    <NavLink to={`/managerPanel/selectedUser/${user._id}`}> 
                        <p className="manager_page_desc">{user.userName}</p>
                        <p className="manager_page_desc">{user._id}</p>
                        </NavLink>
                    </li>
                )) }
            </ul>
        </div>
    );
}