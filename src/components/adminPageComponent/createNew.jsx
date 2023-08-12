import React,{useState} from "react";
import axios from "axios";
import httppPanel from "../../network/htpp-panel";
import SelectSvg from "../selectCategory/selectSvg";
function CreateForm(props) {
    const [postData,setPostData]=useState(null)
  const handlechange = (e) => {
    setPostData(postData=>({ ...postData, [e.target.name]: e.target.value }));
  };
  const handleSubmitForm= async(e)=>{
    e.preventDefault();
    if(postData){
      httppPanel.post("newproduct",{postData}) 
      .then(response => {
        console.log(response)
        })
        .catch(error => {
          console.error("Error:", error);
        });
     }
     switchmodal()

  }
  const switchmodal=()=>{
    props.onToggleModal()
}
  
  return (
    <section className="drop_down">
      <div className="create_form_modal">
        <button className="close_modal_btn" onClick={switchmodal}><SelectSvg id="close"></SelectSvg></button>
        <form onSubmit={handleSubmitForm}>
        <ul className="form_list">
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
              title
              <input required type="text" name="title" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                img
              <input required type="text" name="img" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                ram
              <input required type="text" name="ram" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                memory
              <input required type="text" name="memory" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                 cpu
              <input required type="text" name="cpu" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                camera
              <input required type="text" name="camera" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
            description
              <input required type="text" name="description" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
          <li className="form_item_input">
            <label htmlFor="" className="label_input">
                price
              <input required type="text" name="price" onChange={handlechange} className="input_admin_form"/>
            </label>
          </li>
        </ul>
        <button className="submit_form_btn" type="submit" onClick={handleSubmitForm}>Submit</button>
        </form>
      </div>
    </section>
  );
}
export default CreateForm;
