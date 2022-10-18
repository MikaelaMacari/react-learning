import React from "react";

const SelectElement = ({ element, register, errors }) => {
  return (
    <>
      <label>{element.label}</label>
      <select className="form-select  mb-3" name={element.name} {...register(element.name, { ...element.register })}>
        {element.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {errors[element.name] && <p className="text-danger">{errors[element.name]?.message}</p>}
    </>
  );
};

export default SelectElement;
