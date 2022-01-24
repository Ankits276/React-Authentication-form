import React from "react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import Button from "../../Component/Button/Button";
import Input from "../../Component/Input/Input";
import "./SignIn.css";

export const SignIn = () => {
  const navigation = useNavigate();
  const [crediential, setCrediential] = useState<any>({
    login: "",
    password: "",
  });
  useEffect(() => {
    const currentdata = localStorage.getItem("current");
    if (currentdata) {
      navigation("/Dashboard");
      return;
    }
  }, []);

  const signInSubmit = (e: any): any => {
    const getData: any = localStorage.getItem(crediential.login.toLowerCase());
    const parsedata = JSON.parse(getData);
    if (parsedata && parsedata.password == crediential.password) {
      navigation("/Dashboard");
      alert("Login Successfully");
      const payload = {
        login: parsedata.email,
        username: parsedata.userName,
      };
      localStorage.setItem("current", JSON.stringify(payload));
      return;
    }
    alert("Invalid Credentials");
    console.log("Password not correct");

    navigation("/SignIn");
  };
  const setStateCrediential = (e: any): any => {
    const {name, value} = e.target;
    setCrediential({...crediential, [name]: value});
  };
  const onSignUp = () => {
    navigation("/");
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="SignUpName">Sign In</h1>
        <div className="inputFeild">
          <div className="email">
            <Input
              type="email"
              name="login"
              lable="Email id :-  "
              placeholder="Your Email Id"
              Onchange={setStateCrediential}
            />
          </div>
          <div className="email">
            <Input
              type="password"
              name="password"
              lable="Password :-  "
              placeholder="Your Password"
              Onchange={setStateCrediential}
            />
          </div>
          <div className="action-container">
            <Button name="Submit" onClick={signInSubmit} />
            <Button name="Sign Up" onClick={onSignUp} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
