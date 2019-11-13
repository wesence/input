// @flow
import React from 'react';
import { InputContainer } from '../input/Input.styled';

type Props = {
  value: String,
  errors: Array<Object>,
  handleUpload: () => void,
  theme?: Object,
};

const MediaUploader = ({ errors, handleUpload, value, theme }: Props) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    handleUpload(file);
  };

  return (
    <InputContainer withError={errors && errors.length > 0} theme={theme}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onChange(e)}
        className="upload"
      />
      {value && (
        <div className="image-container">
          <img src={value} alt="preview" />
        </div>
      )}
      {errors &&
        errors.length > 0 &&
        errors.map((i) => (
          <span key={i.id} className="error">
            {i.message}
          </span>
        ))}
    </InputContainer>
  );
};
export default MediaUploader;
