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
    transition: ${({ theme: { transition } }) => transition};
    color: ${({ theme: { colors } }) => colors.grey};
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
    fill: ${({ theme: { colors } }) => colors.grey};
    transition: ${({ theme: { transition } }) => transition};
  }

  input,
  textarea {
    border: 2px solid
      ${({ withError, theme: { colors } }) =>
        withError ? colors.lightgrey : colors.lightgrey};
    width: 100%;
    max-width: 100%;
    padding: 10px;
    padding-left: ${({ withIcon }) => (withIcon ? '40px' : '10px')};
    border-radius: 5px;
    transition: ${({ theme: { transition } }) => transition};

    &:focus,
    &.active {
      outline: none;
      border-color: ${({ theme: { colors } }) => colors.blue};

      & + label {
        display: none;
        left: ${({ withIcon }) => (withIcon ? '35px' : '10px')};
        color: ${({ theme: { colors } }) => colors.black};
      }

      & ~ svg {
        fill: ${({ theme: { colors } }) => colors.blue};
      }
    }

    &.active:not(:focus) {
      border-color: ${({ theme: { colors } }) => colors.lightgrey};
      color: ${({ theme: { colors } }) => colors.grey};

      & ~ svg {
        fill: ${({ theme: { colors } }) => colors.grey};
      }
    }

    &:disabled {
      background-color: #ffffff;
    }
  }

  input[type='file'] {
    padding: 7px;
    color: ${({ theme: { colors } }) => colors.grey};
  }

  textarea {
    resize: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    min-height: 24px;
    height: auto;
  }

  .error {
    display: block;
    text-align: left;
    color: ${({ theme: { colors } }) => colors.red};
    font-size: 14px;
  }

  .image-container {
    display: flex;
    width: 100px;
    height: 100px;
    text-align: left;

    img {
      display: block;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
