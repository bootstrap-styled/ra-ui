import React from 'react';
import { Card } from '@bootstrap-styled/v4';

const styles = {
    card: {
        float: 'left',
        margin: '-20px 20px 0 15px',
        zIndex: 100,
        borderRadius: 3,
        display: 'block',
    },
    icon: {
        float: 'right',
        width: 54,
        height: 54,
        padding: 14,
        color: '#fff',
    },
};

const CardIcon = ({ Icon, bgColor }) => (
    <Card style={{ backgroundColor: bgColor, float: 'left', margin: '-20px 20px 0 15px', zIndex: '100', borderRadius: 3, display: 'block' }}>
        <Icon style={styles.icon}/>
    </Card>
);

export default CardIcon;
