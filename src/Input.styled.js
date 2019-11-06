/* eslint-disable indent */
import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  width: 100%;
  max-width: ${({ width }) => width || 'unset'};
  ${({ hidden }) => (hidden ? 'display: none;' : '')}

  label {
    position: absolute;
    left: ${({ withIcon }) => (withIcon ? '40px' : '15px')};
    top: 10px;
    font-size: 1em;
    background-color: #ffffff;
    border: 2px solid #ffffff;
    transition: ${(props) => {
      console.log(props);
      return props.theme.transition;
    }};
    color: ${(props) => props.theme.colors.textSecondary};
    cursor: text;
    pointer-events: none;
    touch-action: none;
  }

  svg {
    position: absolute;
    left: 13px;
    top: 10px;
    height: 20px;
    width: 20px;
    fill: ${(props) => props.theme.colors.textSecondary};
    transition: ${(props) => props.theme.transition};
  }

  input {
    border: 2px solid
      ${({ withError, props }) =>
        withError
          ? props.theme.colors.textSecondaryLight
          : props.theme.colors.textSecondaryLight};
    width: 100%;
    max-width: 100%;
    padding: 10px;
    padding-left: ${({ withIcon }) => (withIcon ? '40px' : '10px')};
    border-radius: 5px;
    transition: ${(props) => props.theme.transition};

    &:focus,
    &.active {
      outline: none;
      border-color: ${(props) => props.theme.colors.btnPrimary};

      & + label {
        display: none;
        left: ${({ withIcon }) => (withIcon ? '35px' : '10px')};
        color: ${(props) => props.theme.colors.textPrimary};
      }

      & ~ svg {
        fill: ${(props) => props.theme.colors.btnPrimary};
      }
    }

    &.active:not(:focus) {
      border-color: ${(props) => props.theme.colors.textSecondaryLight};
      color: ${(props) => props.theme.colors.textSecondary};

      & ~ svg {
        fill: ${(props) => props.theme.colors.textSecondary};
      }
    }

    &:disabled {
      background-color: #ffffff;
    }
  }

  .error {
    display: block;
    text-align: left;
    color: ${(props) => props.theme.colors.error};
    font-size: 14px;
  }
`;
