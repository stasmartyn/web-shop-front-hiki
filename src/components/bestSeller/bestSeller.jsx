import React from "react";
import Item from "./destSellerItem";
function bestSeller(props) {
  const params=props?.data;
  return (
   <>
   {params &&  <section className="best_seller">
      <div className="best_sell_container">
        <h2>Best Seller</h2>
        <a href="#" className="sales_link">
          see more
        </a>
      </div>
      <ul className="phones_list">
        <Item phones={params} />
      </ul>
    </section>}
   </>
  );
}
export default bestSeller;
