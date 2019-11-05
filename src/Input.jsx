// @flow
import React from 'react';
import { InputContainer } from './Input.styled';

type Props = {
  type?: String,
  name: String,
  id: String,
  placeholder?: String,
  required?: Boolean,
  value?: String,
  errors?: Array,
  onChange: () => void,
  children: String,
  theme: Object,
};

const Input = ({
  type,
  name,
  id,
  placeholder,
  required,
  value,
  errors,
  onChange,
  children,
  theme,
  ...rest
}: Props) => (
  <InputContainer theme={theme}>
    <label htmlFor={id}>{placeholder}</label>
    <input
      id={name}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      required={required}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
    {errors &&
      errors.length > 0 &&
      errors.map((i) => (
        <div key={i.id} className="error">
          {i.message}
        </div>
      ))}
  </InputContainer>
);

export default Input;
