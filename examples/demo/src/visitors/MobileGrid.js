// in src/comments.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { translate } from 'react-admin';
import { DateField, EditButton, NumberField } from '@bootstrap-styled/ra-ui';

import AvatarField from './AvatarField';
import { ColoredNumberField } from './index';
import SegmentsField from './SegmentsField';

// const listStyles = theme => ({
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         margin: '0.5rem 0',
//     },
//     cardTitleContent: {
//         display: 'flex',
//         flexDirection: 'rows',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     cardContent: {
//         ...theme.typography.body1,
//         display: 'flex',
//         flexDirection: 'column',
//     },
// });

const MobileGrid =
    translate(({ ids, data, basePath, translate }) => (
        <div style={{ margin: '1em' }}>
            {ids.map(id => (
                <Card key={id}>
                    <CardHeader
                        title={
                            <div>
                                <h2>{`${data[id].first_name} ${
                                    data[id].last_name
                                }`}</h2>
                                <EditButton
                                    resource="visitors"
                                    basePath={basePath}
                                    record={data[id]}
                                />
                            </div>
                        }
                        avatar={<AvatarField record={data[id]} size="45" />}
                    />
                    <CardContent>
                        <div>
                            {translate(
                                'resources.customers.fields.last_seen_gte'
                            )}&nbsp;
                            <DateField
                                record={data[id]}
                                source="last_seen"
                                type="date"
                            />
                        </div>
                        <div>
                            {translate(
                                'resources.commands.name',
                                parseInt(data[id].nb_commands, 10) || 1
                            )}&nbsp;:&nbsp;<NumberField
                                record={data[id]}
                                source="nb_commands"
                                label="resources.customers.fields.commands"
                            />
                        </div>
                        <div>
                            {translate(
                                'resources.customers.fields.total_spent'
                            )}&nbsp; :{' '}
                            <ColoredNumberField
                                record={data[id]}
                                source="total_spent"
                                options={{ style: 'currency', currency: 'USD' }}
                            />
                        </div>
                    </CardContent>
                    {data[id].groups &&
                        data[id].groups.length > 0 && (
                            <CardContent>
                                <SegmentsField record={data[id]} />
                            </CardContent>
                        )}
                </Card>
            ))}
        </div>
    )
);

MobileGrid.defaultProps = {
    data: {},
    ids: [],
};

export default MobileGrid;
