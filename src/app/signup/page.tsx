import { type Metadata } from "next";
import SignupForm from "~/clients/pages/Signup/SignupForm";

export const metadata: Metadata = {
  title: "Signup"
};

const Signup = () => {
  return <SignupForm />;
};

export default Signup;
