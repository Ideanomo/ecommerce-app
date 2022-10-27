import { useState, useEffect } from "react";
import { getCountryCode } from "./Validator";

const useForm = ({ initState, callback, validator }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter((error) => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors()) callback();
  }, [errors]);

  const handleBlur = (e) => {
    const { name: fieldName } = e.target;
    const errorFields = validator(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(errorFields)[0],
    }));
  };

  return {
    handleChange,
    handleBlur,
    state,
    errors,
  };
};

export default useForm;
