import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collectionPreview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return (
            //  destructure props and pass it in the component
            <CollectionPreview key={id} {...otherCollectionProps} />
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
