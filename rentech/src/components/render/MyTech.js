import React, { useEffect }from "react";
import {connect} from 'react-redux'

import { Card, Image, Icon, Button } from "semantic-ui-react";
import AddItem from "./AddItem.js";
import EditItem from "./EditItem.js";
import { getMyEquipmentItem, deleteItem } from '../../store/actions/equipmentActions'


const MyTechList = props => {

  useEffect(() => {
    props.getMyEquipmentItem()
  },[]);

  console.log(props.rentItems);
 

  return (
    <div>
      <h2 className="myTech-header">My Tech Items</h2>

      <div className="tech-container">
        <div className="myTech-list">


      {!props.rentItems.length && <p>No Items to display yet!</p>}

        {props.rentItems && props.rentItems.map(rentItem => (
          <MyTechItems key={rentItem.id } rentItem={rentItem} deleteItem={props.deleteItem}/>
        ) )}

          <AddItem props={props}/>

        </div>
      </div>
    </div>
  );
};

function MyTechItems(props) {
  console.log(props.rentItem)
  return (
    <div className="myTech-item">
      <Card>
        <Image
          src={props.rentItem.category.imageUrl}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{props.rentItem.name}</Card.Header>
          <Card.Description>I{props.rentItem.description}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Card.Header> ${props.rentItem.price} per day</Card.Header>
        </Card.Content>

        <Card.Content extra>
          {props.rentItem.category.name}
        </Card.Content>

        <div className="button-box">

          <EditItem rentItem={props.rentItem}/>

          <Button 
            onClick = {() => {props.deleteItem(props.rentItem.id).then(() => {window.location.reload() })}} 
            color="red" 
            size="small" 
            className="techbutton"
          >
            Delete
          </Button>
          
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  rentItems: state.equipmentReducer.rentItems,
  
  })

export default connect(mapStateToProps,{getMyEquipmentItem, deleteItem} )(MyTechList);
