// @flow
import React from 'react';
import Select from 'react-select';

type Props = {
  name: String,
  id: String,
  placeholder?: String,
  options?: Array,
  handler: () => void,
  fluid?: Boolean,
  theme?: Object,
  width?: String,
  autoFocus?: Boolean,
  isMulti?: Boolean,
  defaultValue?: Object | Array,
  hideDropdownIndicator?: Boolean,
  hideOptions?: Boolean,
  onChange?: () => void,
  value: Array<Object>,
};

const CustomDropDown = ({
  name,
  id,
  placeholder,
  options,
  handler,
  fluid,
  width,
  theme,
  autoFocus,
  isMulti,
  defaultValue,
  hideDropdownIndicator,
  hideOptions,
  onChange,
  value,
}: Props) => {
  const selectStyles = {
    placeholder: (provided) => ({
      ...provided,
      color: theme.colors.textSecondary,
    }),
    control: (provided, state) => ({
      ...provided,
      padding: 0,
      borderWidth: 2,
      borderColor: state.isFocused
        ? theme.colors.btnPrimary
        : theme.colors.textSecondaryLight,
      boxShadow: 'unset',
      borderRadius: 5,
      marginBottom: 15,
      width: fluid ? '100%' : 'auto',
      maxWidth: width || 'unset',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        borderColor: state.isFocused
          ? theme.colors.btnPrimary
          : theme.colors.textSecondaryLight,
      },
      '&>div': {
        overflow: 'unset',
        '&:first-child': {
          cursor: 'text',
        },
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.textSecondaryLight,
      marginRight: 10,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: theme.colors.textPrimary,
      paddingLeft: 8,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      cursor: 'pointer',
      marginLeft: 3,
      '&>svg': {
        fill: theme.colors.textSecondary,
      },
      '&:hover': {
        backgroundColor: theme.colors.btnPrimary,
        '&>svg': {
          fill: '#ffffff',
        },
      },
    }),
    menu: (provided) => ({
      ...provided,
      display: hideOptions ? 'none' : 'block',
      maxWidth: width || 'unset',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? theme.colors.btnPrimary : '#ffffff',
      '&:focus': {
        backgroundColor: state.isSelected
          ? theme.colors.btnPrimaryHover
          : theme.colors.btnPrimary,
      },
      '&:hover': {
        backgroundColor: state.isSelected
          ? theme.colors.btnPrimaryHover
          : theme.colors.textSecondaryLight,
      },
    }),
  };
  return (
    <>
      <Select
        theme={theme}
        name={name}
        id={id}
        options={options}
        styles={selectStyles}
        onChange={onChange || ((r) => handler({ name, value: r }))}
        placeholder={placeholder || 'Select...'}
        autoFocus={autoFocus}
        isMulti={isMulti}
        defaultValue={defaultValue}
        components={hideDropdownIndicator && { DropdownIndicator: null }}
        value={value}
      />
    </>
  );
};

export default CustomDropDown;
