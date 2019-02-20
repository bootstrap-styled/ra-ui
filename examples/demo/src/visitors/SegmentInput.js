import React from 'react';
import { translate } from 'react-admin';
import { SelectInput } from '@bootstrap-styled/ra-ui';
import compose from 'recompose/compose';

import segments from '../segments/data';

// const styles = {
//     input: { width: 150 },
// };

const SegmentInput = ({ translate, ...rest }) => (
    <SelectInput
        {...rest}
        choices={segments.map(segment => ({
            id: segment.id,
            name: translate(segment.name),
        }))}
    />
);

const TranslatedSegmentInput = compose(
    translate,
)(SegmentInput);

TranslatedSegmentInput.defaultProps = {
    source: 'groups',
};

export default TranslatedSegmentInput;
