import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

const MyTechList = () => {
  return (
    <div className="tech-container">
      <h2>My Tech Items</h2>
      <div className="myTech-list">
        {/* Map out given user items */}
        <MyTechItems />
        <Button className="add-button-mytech" size="massive">
          BIG BUTTON TO ADD ITEMS
        </Button>
      </div>
    </div>
  );
};

function MyTechItems() {
  return (
    <div className="myTech-item">
      <Card>
        <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Item Name: Super Digital Camera</Card.Header>
          <Card.Description>
            Sony RcX8VTS digital camera in perfect condition.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Price: $100.00</p>
        </Card.Content>
        <div>
          <Button primary>Edit</Button>
          <Button secondary>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default MyTechList;
