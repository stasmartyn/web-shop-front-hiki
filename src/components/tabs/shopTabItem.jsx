import React from "react";
import SelectSvg from "../selectCategory/selectSvg";
import Button from 'react-bootstrap/Button';

function shopTabItem(props) {
  const additionalinfo = props.onCharacteristics;
  const { cpu, ram, memory, camera, price } = additionalinfo;
  const formatPrice = price.toLocaleString("ua");

  const handleSelect = () => {};

  return (
    <div>
      <ul className="shop_list">
        <li className="shop_list_item">
          <SelectSvg id="cpu" />
          <p className="list_item_text">{cpu}</p>
        </li>
        <li className="shop_list_item">
          <SelectSvg id="camera" />
          <p className="list_item_text">{camera}mp</p>
        </li>
        <li className="shop_list_item">
          <SelectSvg id="sdram" />
          <p className="list_item_text">{ram}GB</p>
        </li>
        <li className="shop_list_item">
          <SelectSvg id="ram" />
          <p className="list_item_text">{memory}GB</p>
        </li>
      </ul>
      <div className="slect_shop_tab">
        <p className="select_color">Select color and capacity</p>
        <ul className="select_color_list">
          <li className="select_color_list_item">
          <Button variant="primary" size="lg"className="color_radio_btn _first" checked ></Button>{' '}
          </li>
          <li className="select_color_list_item">
          <Button variant="secondary" size="lg" className="color_radio_btn _second"></Button>{' '}
          </li>
        </ul>
        <button className="buy_btn">Add to Cart {formatPrice}₴</button>
      </div>
    </div>
  );
}
export default shopTabItem;
