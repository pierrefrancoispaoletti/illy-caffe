import React from "react";

import {
  FormInputContainer,
  GroupContainer,
  LabelContainer,
} from "./form-input.style";

const FormInput = ({ handleChange, label, ...others }) => {
  console.log(others, label, String(others.value).length);
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...others} />
      {label && (
        <LabelContainer
          className={`${
            String(others?.value)?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </LabelContainer>
      )}
    </GroupContainer>
  );
};

export default FormInput;
