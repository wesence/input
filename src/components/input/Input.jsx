// @flow
import React from 'react';
import { InputContainer } from './Input.styled';
type Props = {
  type?: string,
  name: string,
  id: string,
  placeholder?: string,
  required?: boolean,
  value?: string,
  errors?: Array<{ id: number | string, message: string }>,
  onChange: (string, string) => void,
  children: string,
  characterCount?: boolean,
  errColor?: string,
  theme?: {
    colors: {},
  },
  readOnly: boolean,
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
  readOnly,
  ...rest
}: Props) => {
  function renderInput() {
    switch (type) {
      case 'textarea':
        return (
          <>
            <textarea
              id={name}
              value={value}
              name={name}
              className={`${value.length > 0 ? 'active' : ''}${errors && errors.length > 0 ? ' invalid' : ''}`}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              required={required}
              readOnly={readOnly}
            />
            {type !== 'file' && <label htmlFor={id}>{placeholder}</label>}
            {characterCount && value && value.replace(/\s/g, '').length > 0 ? (
              <div className="error">{value.length}</div>
            ) : null}
          </>
        );
      default:
        return (
          <>
            <input
              type={type || 'text'}
              id={name}
              value={value}
              name={name}
              required={required}
              className={`${value.length > 0 ? 'active' : ''}${errors && errors.length > 0 ? ' invalid' : ''}`}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              readOnly={readOnly}
            />
            {type !== 'file' && <label htmlFor={id}>{placeholder}</label>}
            {characterCount && value && value.replace(/\s/g, '').length > 0 ? (
              <div className="error">{value.length}</div>
            ) : null}
          </>
        );
    }
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