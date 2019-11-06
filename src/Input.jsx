// @flow
import React from 'react';
// import { withTheme } from 'styled-components';
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
  characterCount?: Boolean,
  errColor?: String,
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
  characterCount,
  children,
  errColor,
  ...rest
}: Props) => {
  function renderInput() {
    return (
      <>
        <input
          id={name}
          name={name}
          type={type}
          onChange={(e) => onChange(e.target.name, e.target.value, e)}
          value={value}
          required={required}
          characterCount={characterCount}
        />
        <label htmlFor={id}>{placeholder}</label>
        {characterCount && value && value.replace(/\s/g, '').length > 0 ? (
          <div className="errors">{value.length}</div>
        ) : null}
      </>
    );
  }

  return (
    <InputContainer
      withError={errors && errors.length > 0}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}>
      {renderInput()}
      {errors &&
        errors.length > 0 &&
        errors.map((i) => (
          <div key={i.id} className="error">
            {i.message}
          </div>
        ))}
    </InputContainer>
  );
};

export default Input;
