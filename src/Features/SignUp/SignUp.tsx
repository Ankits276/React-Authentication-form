import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../../Component/Input/Input";
import Button from "../../Component/Button/Button";
import {EmailValidation, PasswordValidation} from "../../Utility/RegEx";
import "./SingUp.css";
export const SignUp = () => {
  const navigation = useNavigate();
  const [profile, setprofile] = useState({
    email: "",
    password: "",
    confPassword: "",
  });
  useEffect(() => {
    const currentdata = localStorage.getItem("current");
    if (currentdata) {
      navigation("/Dashboard");
      return;
    }
  }, []);
  const _profile = (e: any) => {
    const {name, value} = e.target;
    if (value.trim().length === 0) {
      return value;
    }
    setprofile({...profile, [name]: value});
  };
  const onSubmit = () => {
    switch (true) {
      case !EmailValidation.test(profile.email):
        return alert("Please fill Email Address");
      case !profile.password.match(PasswordValidation):
        return alert(
          "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        );
      case !profile.confPassword.match(PasswordValidation):
        return alert("Please fill Confirm Password");
      case profile.password !== profile.confPassword:
        return alert("Confirm password should be same");
      default:
        break;
    }
    const newObj: any = {...profile};
    delete newObj.password;
    delete newObj.confPassword;
    const getdata = localStorage.getItem(profile.email.toLowerCase());
    if (!getdata) {
      localStorage.setItem(
        profile.email.toLowerCase(),
        JSON.stringify(profile)
      );
    }
    navigation("/SignIn");
  };
  const onLogin = () => {
    navigation("/SignIn");
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="SignUpName">Sign Up</h1>
        <div className="email">
          <Input
            type="email"
            name="email"
            lable="Email id :-"
            placeholder="Your Email Id"
            Onchange={(e: any) => _profile(e)}
          />
        </div>
        <div className="email">
          <Input
            type="password"
            name="password"
            lable="Password :-"
            placeholder="Your Password"
            Onchange={(e: any) => _profile(e)}
          />
        </div>
        <div className="email">
          <Input
            type="password"
            name="confPassword"
            lable="Confirm Password :-"
            placeholder="Confirm Password"
            Onchange={(e: any) => _profile(e)}
          />
        </div>
        <div className="action-container">
          <Button name="Submit" onClick={onSubmit} />
          <Button name="Sign In" onClick={onLogin} />
        </div>
      </div>
    </>
  );
};
