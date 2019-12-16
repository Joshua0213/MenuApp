import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const NumberFieldGroup = ({
  name,
  placeholder,
  value,
  lable,
  error,
  info,
  type,
  onChange,
  disabled,
  min,
  max
}) => {
  return (
    <div className="flex justify-center">
      <input
        type={type}
        min={min}
        max={max}
        className={classnames(
          " bg-gray-100 w-11/12 rounded-lg text-m border-solid border-2 hover:bg-white hover:border-gray-300 focus:outline-none focus:shadow-outline focus:bg-white",
          {
            "border-red-500": error
          }
        )}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="text-red-500 -mt-3 mb-2">{error}</div>}
    </div>
  );
};

NumberFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  onChange: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  disabled: propTypes.string
};

NumberFieldGroup.defaultProps = {
  type: "text"
};

export default NumberFieldGroup;
