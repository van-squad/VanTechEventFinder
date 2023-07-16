import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourites",
};

const FavListLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default FavListLayout;
