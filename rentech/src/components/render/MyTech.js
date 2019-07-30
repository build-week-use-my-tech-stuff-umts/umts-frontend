import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import AddItem from "./AddItem.js";
import EditItem from "./EditItem.js";
const MyTechList = () => {
  return (
    <div>

    <h2 className='myTech-header'>My Tech Items</h2>

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

function MyTechItems() {
  return (
    <div className="myTech-item">
      <Card>
        <Image src={require("../../img/camera-macro-optics-122400.jpg")} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Item Name: Super Digital Camera</Card.Header>
          <Card.Description>
            Sony RcX8VTS digital camera in perfect condition.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Price: $100.00</p>
        </Card.Content>
        <div className='button-box'>
<EditItem/>
          <Button color='red' size='small' className='techbutton'>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default MyTechList;
