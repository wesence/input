/* eslint-disable react/prefer-stateless-function */
// @flow
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

type Props = {
  name: String,
  id: String,
  placeholder?: String,
  onSelect: () => void,
  onChange: () => void,
};

class CustomDatePicker extends Component<Props> {
  render() {
    const { name, id, placeholder, onSelect, onChange } = this.props;

    return (
      <DatePicker
        name={name}
        id={id}
        dateFormat="MMM-do-yyyy, h:mm a"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={1}
        placeholderText={placeholder}
        onSelect={(e) => onSelect(e.target.name, e.target.value)}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        selected={null}
        minDate={moment().toDate()}
      />
    );
  }
}

export default CustomDatePicker;
