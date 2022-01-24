import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Dashboard = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const currentdata = localStorage.getItem("current");
    if (!currentdata) {
      navigation("/SignIn");
      return;
    }
  }, []);
  const _Logouthandle = () => {
    localStorage.removeItem("current");
    navigation("/SignIn");
  };
  return (
    <div>
      <h1>successfully Login</h1>
      <button onClick={_Logouthandle}>Logout</button>
    </div>
  );
};
export default Dashboard;
