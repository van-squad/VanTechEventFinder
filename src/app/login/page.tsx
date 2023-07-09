import { type Metadata } from "next";
import LoginForm from "~/clients/pages/Login/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

const LogIn = () => {
  return ( 
  <LoginForm />
  );
};

export default LogIn;
