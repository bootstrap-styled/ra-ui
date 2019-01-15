import React from 'react';
import Badge from '@bootstrap-styled/v4/lib/Badge';
import { translate } from 'react-admin';
import styled from 'styled-components';

import segments from '../segments/data';

const Typography = styled.div`
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.46429em;
`;

const styles = {
  main: { display: 'flex', flexWrap: 'wrap' },
  chip: { margin: 4 },
};

const SegmentsField = ({ record, translate }) => (
  <Typography style={styles.main}>
    {record.groups
            && record.groups.map((segment) => (
              <Badge
                key={segment}
                className="p-2"
                color="primary"
                pill
              >
                {translate(segments.find((s) => s.id === segment).name)}
              </Badge>
            ))}
  </Typography>
);

const TranslatedSegmentsField = translate(SegmentsField);

TranslatedSegmentsField.defaultProps = {
  addLabel: true,
  source: 'groups',
};

export default TranslatedSegmentsField;
