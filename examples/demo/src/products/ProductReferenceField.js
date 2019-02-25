import React from 'react';
import { ReferenceField, TextField } from '@bootstrap-styled/ra-ui';

const ProductReferenceField = props => (
    <ReferenceField
        label="Product"
        source="product_id"
        reference="products"
        {...props}
    >
        <TextField source="reference" />
    </ReferenceField>
);
ProductReferenceField.defaultProps = {
    source: 'product_id',
    addLabel: true,
};

export default ProductReferenceField;
