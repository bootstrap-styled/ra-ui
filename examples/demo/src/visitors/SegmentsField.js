import React from 'react';
import Badge from '@bootstrap-styled/v4/lib/Badge';
import { translate } from 'react-admin';
import segments from '../segments/data';

// const styles = {
//     main: { display: 'flex', flexWrap: 'wrap' },
//     chip: { margin: 4 },
// };

const SegmentsField = ({ record, translate }) => (
    <span className="d-flex flex-wrap">
        {record.groups &&
            record.groups.map(segment => (
                <Badge
                    key={segment}
                    className="m-1 p-1"
                >
                  {translate(segments.find(s => s.id === segment).name)}
                </Badge>
            ))}
    </span>
);

const TranslatedSegmentsField = translate(SegmentsField);

TranslatedSegmentsField.defaultProps = {
    addLabel: true,
    source: 'groups',
};

export default TranslatedSegmentsField;
