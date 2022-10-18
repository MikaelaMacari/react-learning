import React from "react";
import FormInputNumber from "./FormInputNumber";
import FormInputText from "./FormInputText";
import SelectElement from "./SelectElement";

const Inputs = ({ element, register, errors }) => {
  let InputElement;
  switch (element.type) {
    case "text":
      InputElement = FormInputText;
      break;
    case "number":
      InputElement = FormInputNumber;
      break;
    case "select":
      InputElement = SelectElement;
      break;

    default:
      InputElement = FormInputText;
  }

  return <InputElement element={element} register={register} errors={errors} />;
};

export default Inputs;
