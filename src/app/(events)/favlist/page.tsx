import { getServerAuthSession } from "~/server/auth";
import ClientFavListPage from "./components/ClientFavListPage";

const FavListPage = async () => {
  const session = await getServerAuthSession();

  return <ClientFavListPage session={session} />;
};

export default FavListPage;
