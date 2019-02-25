import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';

import CardIcon from './CardIcon';

// const styles = theme => ({
//     main: {
//         flex: '1',
//         marginLeft: '1em',
//         marginTop: 20,
//     },
//     card: {
//         padding: '16px 0',
//         overflow: 'inherit',
//         textAlign: 'right',
//     },
//     title: {
//         padding: '0 16px',
//     },
//     value: {
//         padding: '0 16px',
//         minHeight: 48,
//     },
//     avatar: {
//         background: theme.palette.background.avatar,
//     },
//     listItemText: {
//         paddingRight: 0,
//     },
// });

const NewCustomers = ({ visitors = [], nb, translate }) => (
    <div>
        <CardIcon Icon={CustomerIcon} bgColor="#4caf50" />
        <Card>
            <p>
                {translate('pos.dashboard.new_customers')}
            </p>
            <h2>
                {nb}
            </h2>
            <Divider />
            <List>
                {visitors.map(record => (
                    <ListItem
                        button
                        to={`/customers/${record.id}`}
                        component={Link}
                        key={record.id}
                    >
                        <Avatar
                            src={`${record.avatar}?size=32x32`}
                        />
                        <ListItemText
                            primary={`${record.first_name} ${record.last_name}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Card>
    </div>
);

const enhance = compose(
    translate
);

export default enhance(NewCustomers);
