import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import ButtonBs from '@bootstrap-styled/v4/lib/Button';

import ContentAdd from '@material-ui/icons/Add';
import compose from 'recompose/compose';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { translate } from 'ra-core';

import Button from './Button';
import Responsive from '../layout/Responsive';

const CreateButton = ({
    basePath = '',
    className,
    translate,
    label = 'ra.action.create',
    icon = <ContentAdd />,
    ...rest
}) => (
    <Responsive
        small={
            <ButtonBs
                component={Link}
                color="primary"
                className={classnames('m-0', className)}
                to={`${basePath}/create`}
                aria-label={label && translate(label)}
                {...rest}
            >
                {icon}
            </ButtonBs>
        }
        medium={
            <Button
                tag={Link}
                to={`${basePath}/create`}
                className={classnames('d-inline-flex align-items-center', className)}
                label={label && translate(label)}
                {...rest}
            >
                {icon}
            </Button>
        }
    />
);

CreateButton.propTypes = {
    basePath: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.object,
    label: PropTypes.string,
    size: PropTypes.string,
    translate: PropTypes.func.isRequired,
    icon: PropTypes.element,
};

const enhance = compose(
    translate,
    onlyUpdateForKeys(['basePath', 'label']),
);

export default enhance(CreateButton);
