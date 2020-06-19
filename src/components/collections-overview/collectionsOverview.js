import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collectionPreview';
import {selectCollectionsForPreview} from "../../redux/shop/shop-selectors";

import './collections-overview.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => {
                return (
                //  destructure props and pass it in the component
                <CollectionPreview key={id} {...otherCollectionProps} />
                );
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);