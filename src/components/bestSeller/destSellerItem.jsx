import React from "react";
import { NavLink } from "react-router-dom";
function createItem(items) {
const phones=items.phones;
    return(<>
    {phones &&  phones.map((phone) => (
      <li key={phone._id} className="phone_cards">
        <NavLink to={`/selectProduct/${phone._id}`} className="select_item">
          <img src={phone.img[0]} alt={phone.title} className="cards_img" />
          <ul className="phone_cards_list">
            <li>
              <p className="phone_price">
                {phone.price} <span className="curency_price">₴</span>
              </p>
            </li>
            <li>
              <p className="phone_title">{phone.title}</p>
            </li>
          </ul>
        </NavLink>
        
      </li>
    ))}
    </>)
  
}
export default createItem;
