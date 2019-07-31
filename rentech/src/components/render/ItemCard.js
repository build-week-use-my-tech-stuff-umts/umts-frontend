import React from "react";
import { Card, Image, Icon, Modal, Header, Button } from "semantic-ui-react";

const ItemCard = props => {
  // console.log(props.rentItem);
  return (
    <div className="item-card">
      <Card>
        <Image
          src={require("../../img/camera-macro-optics-122400.jpg")}
          // src={props.rentItem.category.image}
          //  uncomment this after BE fix 
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{props.rentItem.name}</Card.Header>
          <Card.Description>
            {props.rentItem.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Card.Header>${props.rentItem.price} per day</Card.Header>
        </Card.Content>
            <Card.Content extra>
        <Icon name='camera' />
        
        {/* {props.rentItem.category.name} */}
        {/* uncomment this after BE fix */}
    </Card.Content>
        <ItemPage props={props}/>
      </Card>
    </div>
  );
};

const ItemPage = props => {
  console.log(props.props.rentItem);
  return (
    <div className="item-page">
      <Modal trigger={<Button color='blue'>View Details</Button>}>
        <Modal.Header>{props.props.rentItem.name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={require("../../img/camera-macro-optics-122400.jpg")} />
          {/* src={props.props.rentItem.category.image}
          uncomment this after BE fix */}
          <Modal.Description>
            <Header>${props.props.rentItem.price} per day</Header>
            <p>{props.props.rentItem.description}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ItemCard;
