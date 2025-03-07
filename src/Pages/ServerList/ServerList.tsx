import { useAuth } from "../../core/auth";

const ServerList: React.FC = () => {
  const auth = useAuth();

  if (!auth) {
    return <>no auth</>;
  }

  return (
    <>
      <p>Server List</p>
      <button onClick={() => auth.logout()}>logout</button>
    </>
  );
};

export default ServerList;
