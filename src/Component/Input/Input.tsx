import React from "react";

const Input = (props: any) => {
  const {name, placeholder, type, lable, Onchange} = props;
  return (
    <>
      <label>{lable}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={Onchange}
      />
    </>
  );
};

Input.defaultProps = {
  placeholder: "Your Name",
  type: "text",
  name: "Ankit",
  lable: "",
  Onchange: () => console.log("va"),
};
export default Input;
