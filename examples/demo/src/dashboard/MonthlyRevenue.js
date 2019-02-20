import React from 'react';
import { Card, H3, P } from '@bootstrap-styled/v4';

import DollarIcon from '@material-ui/icons/AttachMoney';
import { translate } from 'react-admin';

import CardIcon from './CardIcon';

const styles = {
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
        display: 'block',
    },
};

const MonthlyRevenue = ({ value, translate }) => (
    <div style={styles.main}>
        <CardIcon Icon={DollarIcon} bgColor="#31708f" />
        <Card style={styles.card}>
            <P>{translate('pos.dashboard.monthly_revenue')}</P>
            <H3>{value}</H3>
        </Card>
    </div>
);

export default translate(MonthlyRevenue);
