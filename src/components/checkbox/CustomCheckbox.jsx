/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// @flow

import React from 'react';
import Checkbox from './Checkbox';

type Props = {
  checked: Boolean,
  onChange: () => void,
  label: String,
};

const CustomCheckbox = ({ checked, onChange, label, ...props }: Props) => (
  <div>
    <label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Checkbox checked={checked} onChange={onChange} {...props} />
      <span>{label}</span>
    </label>
  </div>
);
export default CustomCheckbox;
