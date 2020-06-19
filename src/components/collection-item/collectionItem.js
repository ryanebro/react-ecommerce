import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button";
import { addItem } from "../../redux/cart/cart-actions";

import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

// need to dispatch addItem action
const mapDispatchToProps = dispatch => ({
  // create function which is a property addItem, which when called will receive the item property, pass it to addItem action creator which gives back object where type is addItem and the payload is equal to the item that got passed in. then dispach object into store
  addItem: item => dispatch(addItem(item))
});

// if no mapStateToProps set firsp arg to null
export default connect(null, mapDispatchToProps)(CollectionItem);
