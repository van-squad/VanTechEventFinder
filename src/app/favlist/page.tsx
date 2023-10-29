import { getServerAuthSession } from "~/server/auth";
import FavListPage from "./compoments/page/FavListPage";

const FavPage = async () => {
  const session = await getServerAuthSession();

  return <FavListPage session={session} />;
};

export default FavPage;
