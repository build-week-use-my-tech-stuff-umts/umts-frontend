import React, {useEffect} from "react";
import {connect} from 'react-redux'
import ItemCard from "./ItemCard";
import  {getEquipmentList} from '../../store/actions/equipmentActions'
//This component is rendering elements for 'Explore Tech'


const Marketplace = props => {

useEffect(() => {
  props.getEquipmentList()
},[]);


  return (
    <div className="items">
      <h1>Check out the RenTech Marketplace!</h1>
      <div className="item-list">
        
      {props.rentItems && props.rentItems.map(rentItem => (
        <ItemCard key={rentItem.id } rentItem={rentItem}/>
      ) )}
        
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
rentItems: state.equipmentReducer.rentItems,

})

export default connect(mapStateToProps, {getEquipmentList})(Marketplace);
