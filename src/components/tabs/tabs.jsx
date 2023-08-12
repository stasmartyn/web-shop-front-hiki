import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShopTabItem from "./shopTabItem";
function NoAnimationExample(props) {
  const tabsDescription = props.data;
  return (
    <Tabs
      defaultActiveKey="shop"
      transition={false}
      id="noanim-tab-example"
      className=""
    >
      <Tab key={1} eventKey="shop" title="Shop">
        <ShopTabItem onCharacteristics={tabsDescription} />
      </Tab>
      <Tab key={2} eventKey="details" title="Details">
        <p>{tabsDescription.description}</p>
      </Tab>
      <Tab key={3} eventKey="features" title="Features" disabled>
        {/* And what did you expect?. This was not in the template*/}
      </Tab>
    </Tabs>
  );
}

export default NoAnimationExample;
