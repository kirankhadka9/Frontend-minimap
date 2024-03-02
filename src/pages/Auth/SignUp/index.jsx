import React from "react";
import SignUpNav from "../../../components/SignUpNav"
import {  Outlet  } from "react-router-dom"
import Auth from "..";

const SignUp = () => {
  return (
    <SignUpNav style={{ align: "centre" }} /> 
  );
};

export default SignUp;
