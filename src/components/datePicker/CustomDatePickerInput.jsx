/* eslint-disable react/prefer-stateless-function */
// @flow
import React from 'react';
import DatePicker from 'react-datepicker';
// import moment from 'moment';
import { InputContainer } from '../input/Input.styled';

type Props = {
  value: any,
  name: String,
  id: String,
  placeholder?: String,
  onSelect: () => void,
  onChange: () => void,
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

const CustomDatePicker = ({
  name,
  id,
  placeholder,
  onSelect,
  onChange,
  value,
  theme,
}: Props) => (
  <InputContainer theme={{ ...defaultTheme, ...theme }}>
    <DatePicker
      name={name}
      id={id}
      dateFormat="MMM-do-yyyy, h:mm a"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={1}
      placeholderText={placeholder}
      onSelect={(date) => onSelect(name, date)}
      onChange={(date) => onChange(name, date)}
      selected={value}
    />
  </InputContainer>
);

CustomDatePicker.defaultProps = {
  theme: {},
};

export default CustomDatePicker;
