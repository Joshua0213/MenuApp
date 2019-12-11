import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextFieldPassword = ({
  name,
  placeholder,
  value,
  lable,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="">
      <input
        type={type}
        className={classnames(
          " bg-gray-200 w-full my-3 pl-2 rounded-lg text-3xl border-solid border-2 hover:bg-white hover:border-gray-300 focus:outline-none focus:shadow-outline focus:bg-white",
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
      <div className="flex">
        <svg
          className="m-1 w-5 h-5 text-gray-600 fill-current hover:text-black cursor-pointer hover:bg-gray-100 rounded-lg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z" />
        </svg>
        <span>Show Password</span>
      </div>
    </div>
  );
};

TextFieldPassword.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  onChange: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  disabled: propTypes.string
};

TextFieldPassword.defaultProps = {
  type: "text"
};

export default TextFieldPassword;
