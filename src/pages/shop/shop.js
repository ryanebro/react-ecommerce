import React, { Component } from "react";
import {Route} from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collectionsOverview";
import CollectionPage from "../collection/collection";

// match passed by default via Route component in app.js (match, location, history)
const ShopPage = ({match}) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
