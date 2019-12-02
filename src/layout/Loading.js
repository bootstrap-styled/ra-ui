import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslate } from 'ra-core';
import { H1 } from '@bootstrap-styled/v4';
import { bp } from '@bootstrap-styled/css-mixins';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-top: -3em;
  ${props => bp.up('lg', props.theme['$grid-breakpoints'], 'height: 100%; margin-top: 0em;')}
`;
const Message = styled.div`
  ${props => `
    font-family: ${props.theme['$font-family-base']};
    text-align: center;
    opacity: 0.5;
    margin: 0 1em;
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 40px;
    height: 40px;
    animation: fa-spin 1.2s infinite linear;
  }
`;

const Loading = ({
  loadingPrimary = 'ra.page.loading',
  loadingSecondary = 'ra.message.loading',
}) => {
  const translate = useTranslate();
  return (
    <Container>
      <Message>
        <Icon icon="circle-notch" className="color-primary fa-spin" />
        <H1>{translate(loadingPrimary)}</H1>
        <div>
          {translate(loadingSecondary)}
          .
        </div>
      </Message>
    </Container>
  );
};

Loading.propTypes = {
  loadingPrimary: PropTypes.string,
  loadingSecondary: PropTypes.string,
};

Loading.defaultProps = {
  loadingPrimary: 'ra.page.loading',
  loadingSecondary: 'ra.message.loading',
};

export default Loading;
