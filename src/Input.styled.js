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
    transition: ${(props) => props.providedTheme.transition};
    color: ${(props) => props.providedTheme.colors.textSecondary};
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
    fill: ${(props) => props.providedTheme.colors.textSecondary};
    transition: ${(props) => props.providedTheme.transition};
  }

  input {
    border: 2px solid
      ${({ withError, props }) =>
        withError
          ? props.providedTheme.colors.textSecondaryLight
          : props.providedTheme.colors.textSecondaryLight};
    width: 100%;
    max-width: 100%;
    padding: 10px;
    padding-left: ${({ withIcon }) => (withIcon ? '40px' : '10px')};
    border-radius: 5px;
    transition: ${(props) => props.providedTheme.transition};

    &:focus,
    &.active {
      outline: none;
      border-color: ${(props) => props.providedTheme.colors.btnPrimary};

      & + label {
        display: none;
        left: ${({ withIcon }) => (withIcon ? '35px' : '10px')};
        color: ${(props) => props.providedTheme.colors.textPrimary};
      }

      & ~ svg {
        fill: ${(props) => props.providedTheme.colors.btnPrimary};
      }
    }

    &.active:not(:focus) {
      border-color: ${(props) => props.providedTheme.colors.textSecondaryLight};
      color: ${(props) => props.providedTheme.colors.textSecondary};

      & ~ svg {
        fill: ${(props) => props.providedTheme.colors.textSecondary};
      }
    }

    &:disabled {
      background-color: #ffffff;
    }
  }

  .error {
    display: block;
    text-align: left;
    color: ${(props) => props.providedTheme.colors.error};
    font-size: 14px;
  }
`;
