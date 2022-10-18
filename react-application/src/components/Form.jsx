import React from "react";
import { useForm } from "react-hook-form";
import formModel from "../mock/formModel.json";
import Inputs from "./formElements/Inputs";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: null,
      address: "",
      city: "",
      postalCode: "",
    },
  });
  const onSubmit = (fieldsData) => {
    console.log(fieldsData);
    reset();
  };
  return (
    <>
      <div className="row d-flex justify-content-center g-4">
        <div className="col-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {formModel.map((element) => (
              <Inputs key={element.name} element={element} register={register} errors={errors} />
            ))}
            <div className="d-flex justify-content-center">
              <input className="btn btn-primary mt-4 " type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
