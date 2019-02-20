import React from 'react';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';
import { stringify } from 'query-string';

import { ProductIcon } from '../products';

const LinkToRelatedProducts = ({ record, translate }) => (
    <Button
        size="small"
        color="primary"
        component={Link}
        to={{
            pathname: '/products',
            search: stringify({
                page: 1,
                perPage: 25,
                sort: 'id',
                order: 'DESC',
                filter: JSON.stringify({ category_id: record.id }),
            }),
        }}
        className="d-inline-flex align-items-center"
    >
        <ProductIcon className="pr-1" />
        {translate('resources.categories.fields.products')}
    </Button>
);

const enhance = compose(
    translate
);
export default enhance(LinkToRelatedProducts);
