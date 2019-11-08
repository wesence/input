/* eslint-disable react/prefer-stateless-function */
// @flow
import React from 'react';
import DatePicker from 'react-datepicker';
import { InputContainer } from '../input/Input.styled';

type Props = {
  value: any,
  name: String,
  id: String,
  placeholder?: String,
  onSelect: () => void,
  onChange: () => void,
  minDate: String,
};

const CustomDatePicker = ({
  name,
  id,
  placeholder,
  onSelect,
  onChange,
  minDate,
  value,
}: Props) => (
  <InputContainer>
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
      minDate={minDate}
    />
  </InputContainer>
);

export default CustomDatePicker;
