import React from 'react';
import { translate } from 'react-admin';
import { Title } from '@bootstrap-styled/ra-ui';
import Card from '@bootstrap-styled/v4/lib/Cards/Card';
import Table from '@bootstrap-styled/v4/lib/Table';
import Tbody from '@bootstrap-styled/v4/lib/Table/Tbody';
import Td from '@bootstrap-styled/v4/lib/Table/Td';
import Th from '@bootstrap-styled/v4/lib/Table/Th';
import Thead from '@bootstrap-styled/v4/lib/Table/Thead';
import Tr from '@bootstrap-styled/v4/lib/Table/Tr';


import LinkToRelatedCustomers from './LinkToRelatedCustomers';
import segments from './data';

export default translate(({ translate }) => (
    <Card>
        <Title title={translate('resources.segments.name')} />
        <Table className="mb-0">
            <Thead>
                <Tr>
                    <Th style={{border: 'none'}}>
                        {translate('resources.segments.fields.name')}
                    </Th>
                    <Th style={{border: 'none'}} />
                </Tr>
            </Thead>
            <Tbody>
                {segments.map(segment => (
                    <Tr key={segment.id}>
                        <Td>{translate(segment.name)}</Td>
                        <Td>
                            <LinkToRelatedCustomers segment={segment.id} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </Card>
));
