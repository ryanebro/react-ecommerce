import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) // get all the keys, then map over array of keys to get the value of collections object
);

// find collection.id matching the url parameter of our COLLECTION_ID_MAP
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);