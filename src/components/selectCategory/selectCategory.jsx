import React from "react";
import { NavLink } from "react-router-dom";
import SelectSvg from "./selectSvg";
function category() {
  return (
    <div>
      <div className="select_title_container">
      </div>
      <nav>
        <ul className="category_list">
          <li className="category_item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeBtn" : "category_item_link"
              }
            >
              <SelectSvg id="phone" />
            </NavLink>
          </li>
          <li className="category_item">
            <NavLink
              to="/computer"
              className={({ isActive }) =>
                isActive ? "activeBtn" : "category_item_link"
              }
            >
              <SelectSvg id="computer" />
            </NavLink>
          </li>
          <li className="category_item">
            <NavLink
              to="/health"
              className={({ isActive }) =>
                isActive ? "activeBtn" : "category_item_link"
              }
            >
              <SelectSvg id="health" />
            </NavLink>
          </li>
          <li className="category_item">
            <NavLink
              to="/basket"
              className={({ isActive }) =>
                isActive ? "activeBtn" : "category_item_link"
              }
            >
              <SelectSvg id="user"  />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default category;
