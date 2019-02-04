import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '@bootstrap-styled/v4/lib/Cards';

import Notification from '../layout/Notification';
import DefaultLoginForm from './LoginForm';


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 1px;
    align-items: center;
    justify-content: flex-start;
    background-repeat: no-repeat;
    background-size: cover;
`;

const LoginCard = styled(Card)`
    &.login-form {
        min-width: 300px;
        margin-top: 6em;
    }
`;

// TODO: discuss how to replace Avatar, AJT.
// const styles = theme => ({
//     avatar: {
//         margin: '1em',
//         display: 'flex',
//         justifyContent: 'center',
//     },
//     icon: {
//         backgroundColor: theme.palette.secondary[500],
//     },
// });

const sanitizeRestProps = ({
  array,
  backgroundImage,
  className,
  location,
  staticContext,
  theme,
  title,
  ...rest
}) => rest;

/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider` using the AUTH_LOGIN verb. Redirects to the root page
 * (/) upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
class Login extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.backgroundImageLoaded = false;
  }

  // Even though the React doc ensure the ref creation is done before the
  // componentDidMount, it can happen that the ref is set to null until the
  // next render.
  // So, to handle this case the component will now try to load the image on
  // the componentDidMount, but if the ref doesn't exist, it will try again
  // on the following componentDidUpdate. The try will be done only once.
  // @see https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element
  updateBackgroundImage = (lastTry = false) => {  // eslint-disable-line
    if (!this.backgroundImageLoaded && this.containerRef.current) {
      const { backgroundImage } = this.props;
      this.containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
      this.backgroundImageLoaded = true;
    }

    if (lastTry) {
      this.backgroundImageLoaded = true;
    }
  }

  // Load background image asynchronously to speed up time to interactive
  lazyLoadBackgroundImage() { // eslint-disable-line
    const { backgroundImage } = this.props;

    if (backgroundImage) {
      const img = new Image();
      img.onload = this.updateBackgroundImage;
      img.src = backgroundImage;
    }
  }

  componentDidMount() {
    this.lazyLoadBackgroundImage();
  }

  componentDidUpdate() {
    if (!this.backgroundImageLoaded) {
      this.lazyLoadBackgroundImage(true);
    }
  }

  render() {
    const { className, loginForm, ...rest } = this.props;

    return (
      <MainWrapper
        className={className}
        {...sanitizeRestProps(rest)}
        ref={this.containerRef}
      >
        <LoginCard className="login-form">
          <div className="d-flex justify-content-center m-3 bg-inverse text-white">
            TODO: fit logo(discuss how this should be passed) or icon!
          </div>
          {loginForm}
        </LoginCard>
        <Notification />
      </MainWrapper>
    );
  }
}

Login.propTypes = {
  authProvider: PropTypes.func,
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.object,
  loginForm: PropTypes.element,
  meta: PropTypes.object,
  previousRoute: PropTypes.string,
};

Login.defaultProps = {
  backgroundImage: 'https://source.unsplash.com/random/1600x900/daily',
  loginForm: <DefaultLoginForm />,
};

export default Login;
