import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import AddItem from "./AddItem.js";
import EditItem from "./EditItem.js";
const MyTechList = props => {

  
  return (
    <div>
      <h2 className="myTech-header">My Tech Items</h2>

      <div className="tech-container">
        <div className="myTech-list">
          {/* Map out given user items */}
          <MyTechItems />
          <AddItem />
        </div>
      </div>
    </div>
  );
};

function MyTechItems(props) {
  return (
    <div className="myTech-item">
      <Card>
        <Image
          src={require("../../img/camera-macro-optics-122400.jpg")}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Item Name Prop</Card.Header>
          <Card.Description>Item Description Prop</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Card.Header>Item Price Prop $000.00</Card.Header>
        </Card.Content>

        <Card.Content extra>
          <Icon name="camera" />
          Item Type: Insert Type prop
        </Card.Content>

        <div className="button-box">

          <EditItem />

          <Button color="red" size="small" className="techbutton">
            Delete
          </Button>
          
        </div>
      </Card>
    </div>
  );
}

export default MyTechList;
