import React from 'react';
import {connect} from 'react-redux'

import CollectionItem from '../../components/collection-item/collectionItem';

import {selectCollection} from '../../redux/shop/shop-selectors';

import './collection.scss';

const CollectionPage = ({ collection }) => {
    const {title, items} = collection;
    console.log('items: ', items)
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

// ownProps are the attributes that are passed when the component is used. In plain React these would be just called props.
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) // (state) is necessary since this selector needs a part of the state depending on the url parameter
})

export default connect(mapStateToProps)(CollectionPage)