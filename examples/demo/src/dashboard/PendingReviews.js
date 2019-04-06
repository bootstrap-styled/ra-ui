import React from 'react';
import compose from 'recompose/compose';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/Comment';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';
import { Card, H3, P, ListGroup, ListGroupItem, ListGroupItemText } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import CardIcon from './CardIcon';

import StarRatingField from '../reviews/StarRatingField';

const styles = theme => ({
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    titleLink: { textDecoration: 'none', color: 'inherit' },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right',
        display: 'block',
        minHeight: 52,
    },
    title: {
        padding: '0 16px',
    },
    value: {
        padding: '0 16px',
        minHeight: 48,
    },
    avatar: {
        background: theme.palette.background.avatar,
    },
})

const ListItemTextWrapper = styled.div`
      overflow-y: hidden;
      height: 4em;
      display: -webkit-box;
      Webkit-line-clamp: 2;
      Webkit-box-orient: vertical;
      margin-left: 16px;
`;

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
    <div style={styles.main}>
        <CardIcon Icon={CommentIcon} bgColor="#f44336" />
        <Card style={styles.card}>
            <P>{translate('pos.dashboard.pending_reviews')}</P>
            <H3><Link to={location}>{nb}</Link></H3>
            <Divider />
            <ListGroup>
                {reviews.map(record => (
                    <ListGroupItem
                        key={record.id}
                        tag={Link}
                        to={`/reviews/${record.id}`}
                        style={{ textDecoration: 'none', fontSize: '13px', flexFlow: 'unset' }}
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
                        <ListItemTextWrapper>
                          <ListGroupItemText className="d-flex flex-column">
                            <StarRatingField record={record} />
                            {record.comment}
                          </ListGroupItemText>
                        </ListItemTextWrapper>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    </div>
);

const enhance = compose(
    translate
);

export default enhance(PendingReviews);
