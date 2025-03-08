import { StoreProvider } from "core/globalState";
import Layout from "./components/Layout";

const ServerListPage: React.FC = () => {
  return (
    <StoreProvider>
      <Layout />
    </StoreProvider>
  );
};

export default ServerListPage;
