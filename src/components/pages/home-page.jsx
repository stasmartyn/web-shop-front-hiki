import React, { Component, useEffect, useState } from "react";
import htppPanel from "../../network/htpp-panel";
import TopSales from "../topSales/topSales";
import BestSeller from "../bestSeller/bestSeller";
import SelectCategory from "../selectCategory/selectCategory";
import SideBar from "../sidebar/sideBar"
function Home () {
const [data,setData]=useState();
const [ selectProduct,setSelectProduct]=useState("");
  

useEffect(() => {
  htppPanel.get("/phones") 
  .then(response => {
     setData(response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });  }, [setData]);

  
    return (
      <section className="global_container">
         <SelectCategory />
        <TopSales />
        <BestSeller data={data} />
        <SideBar/> 
      </section>
    );
  
}

export default Home;
