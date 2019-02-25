import React from 'react';
import { Card, H3, P } from '@bootstrap-styled/v4';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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

const NbNewOrders = ({ value, translate }) => (
  <div style={styles.main}>
    <CardIcon Icon={ShoppingCartIcon} bgColor="#FF9800" />
    <Card style={styles.card}>
      <P>{translate('pos.dashboard.monthly_revenue')}</P>
      <H3>{value}</H3>
    </Card>
  </div>
);

export default translate(NbNewOrders);
