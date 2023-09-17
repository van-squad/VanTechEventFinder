import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up for Vancouver Tech Meetups",
  description: "Create your account and become part of the Vancouver tech meetup movement. Sign up to explore a diverse array of tech meetup events! Connect with fellow tech enthusiasts, expand your knowledge, and engage with Vancouver's dynamic tech ecosystem. Start your journey towards meaningful connections and endless opportunities by signing up today!",
};
const SingupLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SingupLayout;
