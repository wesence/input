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
  characterCount?: Boolean,
  errColor?: String,
  theme?: Object,
};

const defaultTheme = {
  colors: {
    textPrimary: 'rgba(0, 0, 0, 0.85)',
    textSecondaryLight: '#f5f5f5',
    textSecondary: '#9e9e9e',
    btnPrimary: '#1976D2',
    btnPrimaryHover: '#0D47A1',
    error: '#D32F2F',
    shadow: '0 5px 15px rgba(0,0,0,.08)',
    shadowLight: '0 1px 2px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s ease-in-out',
  },
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
  theme,
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
      theme={{ ...defaultTheme, ...theme }}
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

Input.defaultProps = {
  theme: {},
};

export default Input;
