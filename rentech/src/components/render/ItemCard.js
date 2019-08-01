import React from "react";
import { Card, Image, Icon, Modal, Header, Button } from "semantic-ui-react";

const ItemCard = props => {
  // console.log(props.rentItem);
  return (
    <div className="item-card">
      <Card>
        <Image
          src={props.rentItem.category.imageUrl} 
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
       
        
        {props.rentItem.category.name} 
        
    </Card.Content>
        <ItemPage props={props}/>
      </Card>
    </div>
  );
};

const ItemPage = props => {
  // console.log(props.props.rentItem);
  return (
    <div className="item-page">
      <Modal trigger={<Button color='blue'>View Details</Button>}>
        <Modal.Header>{props.props.rentItem.name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={props.props.rentItem.category.imageUrl} />
          
         
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
