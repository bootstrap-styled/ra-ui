import React from 'react';
import { translate } from 'react-admin';
import { SelectArrayInput } from '@bootstrap-styled/ra-ui';

import segments from '../segments/data';

const SegmentsInput = ({ translate, addField, ...rest }) => (
    <SelectArrayInput
        {...rest}
        choices={segments.map(segment => ({
            id: segment.id,
            name: translate(segment.name),
        }))}
    />
);

const TranslatedSegmentsInput = translate(SegmentsInput);

TranslatedSegmentsInput.defaultProps = {
    addField: true,
    source: 'groups',
};

export default TranslatedSegmentsInput;
