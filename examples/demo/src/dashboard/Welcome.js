import React from 'react';
import { Card, CardBlock, H2, P, Button, CardImg } from '@bootstrap-styled/v4';

import CardActions from '@material-ui/core/CardActions';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';

import { translate } from 'react-admin';

const mediaUrl = `https://marmelab.com/posters/beard-${parseInt(
    Math.random() * 10,
    10
) + 1}.jpeg`;

const Welcome = ({ translate }) => (
    <Card>
        <CardImg src={mediaUrl} style={{ height: '18em', display: 'block', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
        <CardBlock>
            <H2>
                {translate('pos.dashboard.welcome.title')}
            </H2>
            <P>
                {translate('pos.dashboard.welcome.subtitle')}
            </P>
        </CardBlock>
        <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button href="https://marmelab.com/react-admin" className="d-inline-flex align-items-center" color="secondary">
                <HomeIcon className="pr-1" />
                {translate('pos.dashboard.welcome.aor_button')}
            </Button>
            <Button href="https://github.com/marmelab/react-admin/tree/master/examples/demo" className="d-inline-flex align-items-center" color="secondary">
                <CodeIcon className="pr-1" />
                {translate('pos.dashboard.welcome.demo_button')}
            </Button>
        </CardActions>
    </Card>
);

export default translate(Welcome);
