import React from 'react';
import compose from 'recompose/compose';
import Button from '@bootstrap-styled/v4/lib/Button';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';
import { stringify } from 'query-string';

import { VisitorIcon } from '../visitors';

const LinkToRelatedCustomers = ({ segment, translate }) => (
    <Button
        size="sm"
        color="primary"
        className=" d-inline-flex align-items-center"
        tag={Link}
        to={{
            pathname: '/customers',
            search: stringify({
                page: 1,
                perPage: 25,
                filter: JSON.stringify({ groups: segment }),
            }),
        }}
    >
        <VisitorIcon className="pr-1" />
        {translate('resources.segments.fields.customers')}
    </Button>
);

const enhance = compose(
    translate
);
export default enhance(LinkToRelatedCustomers);
