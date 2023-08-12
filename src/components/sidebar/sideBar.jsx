import React from "react"
import { NavLink } from "react-router-dom";
import SelectSvg from "../selectCategory/selectSvg";
function sideBar(){
    return(
<div className="side_bar_container">
<NavLink to={`/basket`}><button className="user_svg"><SelectSvg id="user"/></button></NavLink>

</div>
    )
}
export default sideBar;