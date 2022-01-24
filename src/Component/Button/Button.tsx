import React from "react";
export const Button = (props: any) => {
  const {lable, name, onClick} = props;

  const style = {
    border: "none",
    padding: "8px",
    borderRadius: "20px",
  };
  return (
    <>
      <button style={style} onClick={onClick}>
        {name}
      </button>
    </>
  );
};
Button.defaultProps = {
  name: "Submit",
  lable: "Button",
};
export default Button;
