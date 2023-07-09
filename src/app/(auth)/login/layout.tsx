import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
};
const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;
