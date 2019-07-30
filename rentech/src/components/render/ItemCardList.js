import React from "react";
import ItemCard from "./ItemCard";

//This component is rendering elements for 'Explore Tech'
const ItemCardList = () => {
  // GET Request for item card data
  return (
    <div className="items">
      <h1>Check out the RenTech Marketplace!</h1>
      <div className="item-list">
        {/* {data.map(info => {
        return <ItemCard key={info.id} data={info} />;
      })} */}
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default ItemCardList;
