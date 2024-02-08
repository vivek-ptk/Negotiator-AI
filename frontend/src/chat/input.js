import { useState } from "react";

const Input = ({
  label = "",
  name = "",
  type = "text",
  className = "",
  inputClassName = "",
  isRequired = true,
  placeholder = "",
  value = "",
  onchange = () => {},
}) => {
    [value, onchange] = useState("");
  return (
    <div
      className={`${className}`}
      onKeyDown={(keyPressed) => {
        if (keyPressed.key.length == 1) {
          onchange(value + keyPressed.key);
        }
        if (keyPressed.key == "Backspace" && value.length > 0) {
          onchange(value.substring(0, value.length - 1));
        }
      }}
    >
      <label for={name} className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-gray-50 border border border-gray-300 text-gray-900 text-sm rounded- lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
        placeholder={placeholder}
        required={isRequired}
        value={value}
      />
    </div>
  );
};

export default Input;
