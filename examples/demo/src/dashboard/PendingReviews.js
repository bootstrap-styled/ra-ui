import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/Comment';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';

import CardIcon from './CardIcon';

import StarRatingField from '../reviews/StarRatingField';

// const styles = theme => ({
//     main: {
//         flex: '1',
//         marginRight: '1em',
//         marginTop: 20,
//     },
//     titleLink: { textDecoration: 'none', color: 'inherit' },
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
//         overflowY: 'hidden',
//         height: '4em',
//         display: '-webkit-box',
//         WebkitLineClamp: 2,
//         WebkitBoxOrient: 'vertical',
//     },
// });

const location = {
    pathname: 'reviews',
    query: { filter: JSON.stringify({ status: 'pending' }) },
};

const PendingReviews = ({
    reviews = [],
    customers = {},
    nb,
    translate,
}) => (
    <div>
        <CardIcon Icon={CommentIcon} bgColor="#f44336" />
        <Card>
            <p>
                {translate('pos.dashboard.pending_reviews')}
            </p>
            <h2>
                <Link to={location}>
                    {nb}
                </Link>
            </h2>
            <Divider />
            <List>
                {reviews.map(record => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={`/reviews/${record.id}`}
                    >
                        {customers[record.customer_id] ? (
                            <Avatar
                                src={`${
                                    customers[record.customer_id].avatar
                                }?size=32x32`}
                            />
                        ) : (
                            <Avatar />
                        )}

                        <ListItemText
                            primary={<StarRatingField record={record} />}
                            secondary={record.comment}
                            style={{ paddingRight: 0 }}
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

export default enhance(PendingReviews);
