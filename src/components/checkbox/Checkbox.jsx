// @flow
import React from 'react';
import {
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxContainer,
  Icon,
} from './Checkbox.styled';

type Props = {
  checked: Boolean,
  className: String,
  onChange: () => void,
};

const Checkbox = ({ checked, className, ...props }: Props) => (
  <CheckboxContainer className={className}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
export default Checkbox;
