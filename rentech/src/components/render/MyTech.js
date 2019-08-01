import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Card, Image } from "semantic-ui-react";
import AddItem from "./AddItem.js";
import EditItem from "./EditItem.js";

import ConfirmDelete from "./ConfirmDelete";
import {
  getMyEquipmentItem,
  deleteItem
} from "../../store/actions/equipmentActions";

const MyTechList = props => {
  console.log("myTech", props);

  useEffect(() => {
    props.getMyEquipmentItem();
  }, []);

  // console.log(props.rentItems);

  return (
    <div>
      <div className="flex-row">
        <h2 className="myTech-header">My Tech Items</h2>
        <AddItem props={props} />
      </div>
      <div className="tech-container">
        <div className="myTech-list">
          {!props.rentItems.length && <p>No Items to display yet!</p>}

          {props.rentItems &&
            props.rentItems.map(rentItem => (
              <div>
                <MyTechItems
                  key={rentItem.id}
                  rentItem={rentItem}
                  deleteItem={props.deleteItem}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

function MyTechItems(props) {
  console.log(props.rentItem);
  return (
    <div className="myTech-item">
      <Card>
        <Image src={props.rentItem.category.imageUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.rentItem.name}</Card.Header>
          <Card.Description>I{props.rentItem.description}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Card.Header> ${props.rentItem.price} per day</Card.Header>
        </Card.Content>

        <Card.Content extra>{props.rentItem.category.name}</Card.Content>

        <div className="button-box">
          <EditItem rentItem={props.rentItem} />
          <ConfirmDelete
            rentItem={props.rentItem}
            deleteItem={props.deleteItem}
          />

          {console.log("mytectpage", props)}
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = state => ({
  rentItems: state.equipmentReducer.rentItems
});

export default connect(
  mapStateToProps,
  { getMyEquipmentItem, deleteItem }
)(MyTechList);
