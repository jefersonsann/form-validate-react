import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = React.useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form__control">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setFocused(true)
        }
        focused={focused.toString()}
      />
      <small>{errorMessage}</small>
    </div>
  );
};

export default FormInput;
