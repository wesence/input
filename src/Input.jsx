// @flow
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import CustomDatePickerInput from './CustomDatePickerInput';
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
  const [inputValue, inputHandler] = useState(
    type === 'date' ? new Date(value || '') : value || '',
  );

  useEffect(
    (e) => {
      if (value) {
        if (type === 'date') {
          if (typeof value === 'string') {
            inputHandler(e.target.name, new Date(e.target.value));
          }
        } else {
          inputHandler(e.target.name, e.target.value);
        }
      }
    },
    [value],
  );

  function renderInput() {
    switch (type) {
      case 'textarea':
        return (
          <>
            <textarea
              type={type || 'text'}
              id={name}
              value={value}
              name={name}
              className={`${value.length > 0 ? 'active' : ''}${
                errors && errors.length > 0 ? ' invalid' : ''
              }`}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              required={required}
            />
            <label htmlFor={id}>{placeholder}</label>
            {value && value.replace(/\s/g, '').length > 0 ? (
              <div className="error">{value.length}</div>
            ) : null}
          </>
        );

      case 'date':
        return (
          <DatePicker
            name={name}
            id={id}
            dateFormat="MMM-do-yyyy, h:mm a"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={1}
            placeholderText={placeholder}
            className={errors && errors.length > 0 ? ' invalid' : ''}
            onSelect={(e) => inputHandler(e.target.name, e.target.value)}
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
            selected={inputValue || new Date()}
            customInput={<CustomDatePickerInput />}
            minDate={moment().toDate()}
          />
        );

      default:
        return (
          <>
            <input
              type={type || 'text'}
              id={name}
              value={value}
              name={name}
              className={`${value.length > 0 ? 'active' : ''}${
                errors && errors.length > 0 ? ' invalid' : ''
              }`}
              onChange={(e) => onChange(e.target.name, e.target.value)}
              required={required}
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
