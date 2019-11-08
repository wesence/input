/* eslint-disable react/prefer-stateless-function */
// @flow
import React from 'react';

type Props = {
  name: String,
  id: String,
  value: String | Date,
  classes?: String,
  disabled?: Boolean,
  placeholder?: Boolean,
  onClick: () => void,
  onSelect: () => void,
  onChange: () => void,
};

class CustomerDatePickerInput extends React.Component<Props> {
  render() {
    const {
      name,
      id,
      value,
      classes,
      disabled,
      placeholder,
      onClick,
      onSelect,
      onChange,
    } = this.props;

    return (
      <>
        <input
          type="text"
          name={name}
          id={id}
          className={`${value ? 'active' : ''} ${classes || ''}`}
          value={value}
          disabled={disabled}
          autoComplete="new-password"
          onClick={onClick}
          onSelect={onSelect}
          onChange={onChange}
        />
        <label htmlFor={id}>{placeholder}</label>
      </>
    );
  }
}

export default CustomerDatePickerInput;
