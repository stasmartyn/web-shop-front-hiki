import React, { useState, useEffect } from "react";
import httppPanel from "../../network/htpp-panel";
import Product from "../adminPageComponent/product";
import CreateForm from "../adminPageComponent/createNew";
function AdminPage() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [showModal,setModal]=useState(false);

  const switcher=()=>{
    setModal(!showModal)
}

  const handleChange = async (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if(input){
    httppPanel.get(`/${input}`) 
    .then(response => {
       setData(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
   }
  };

 
  return (
    <section className="container admin_page">
      <form onSubmit={handleSubmit} className="admin_serch_form">
        <input type="text" onChange={handleChange} className="admin_input" placeholder="enter id" value={input}/>
      </form>
      <Product props={data} />
      <button onClick={()=>{switcher()}} className="modal_form" >Create New Product</button>
      {showModal && (
          <CreateForm  onToggleModal={switcher}/>
        
        )}
    </section>
  );
}
export default AdminPage;
