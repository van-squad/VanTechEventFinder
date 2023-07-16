import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Signup",
};
const SingupLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SingupLayout;
