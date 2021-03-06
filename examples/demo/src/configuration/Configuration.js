import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { translate, changeLocale, Title } from 'react-admin';
import compose from 'recompose/compose';
import { changeTheme } from './actions';

// const styles = {
//     label: { width: '10em', display: 'inline-block' },
//     button: { margin: '1em' },
// };

const Configuration = ({
    theme,
    locale,
    changeTheme,
    changeLocale,
    translate,
}) => (
    <Card>
        <Title title={translate('pos.configuration')} />
        <CardContent>
            <div>{translate('pos.theme.name')}</div>
            <Button
                variant="raised"
                color={theme === 'light' ? 'primary' : 'default'}
                onClick={() => changeTheme('light')}
            >
                {translate('pos.theme.light')}
            </Button>
            <Button
                variant="raised"
                color={theme === 'dark' ? 'primary' : 'default'}
                onClick={() => changeTheme('dark')}
            >
                {translate('pos.theme.dark')}
            </Button>
        </CardContent>
        <CardContent>
            <div>{translate('pos.language')}</div>
            <Button
                variant="raised"
                color={locale === 'en' ? 'primary' : 'default'}
                onClick={() => changeLocale('en')}
            >
                en
            </Button>
            <Button
                variant="raised"
                color={locale === 'fr' ? 'primary' : 'default'}
                onClick={() => changeLocale('fr')}
            >
                fr
            </Button>
        </CardContent>
    </Card>
);

const mapStateToProps = state => ({
    theme: state.theme,
    locale: state.i18n.locale,
});

export default compose(
    connect(
        mapStateToProps,
        {
            changeLocale,
            changeTheme,
        }
    ),
    translate,
)(Configuration);
