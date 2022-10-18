import React from "react";

const FormInputText = ({ element, register, errors }) => {
  return (
    <>
      <div className="md-form mb-0">
        <label htmlFor={element.name}>{element.label}</label>
        <input type={element.type} name={element.name} {...register(element.name, { ...element.register })} className="form-control" />
      </div>
      {errors[element.name] && <p className="text-danger">{errors[element.name]?.message}</p>}
    </>
  );
};

export default FormInputText;
