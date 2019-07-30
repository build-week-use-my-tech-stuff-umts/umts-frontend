import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ItemPage from "./ItemPage";

const ItemCard = props => {
  return (
    <div className="item-card">
      <Card>
        <Image
          src={require("../../img/camera-macro-optics-122400.jpg")}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Item Name: Super Digital Camera</Card.Header>
          <Card.Description>
            Sony RcX8VTS digital camera in perfect condition.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="email" />
            Message User
          </a>
        </Card.Content>
        <ItemPage />
      </Card>
    </div>
  );
};

export default ItemCard;
