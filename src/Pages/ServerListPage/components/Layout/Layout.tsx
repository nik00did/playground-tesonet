import { useEffect } from "react";
import { ACTIONS, useDispatch } from "core/globalState";
import { useAuth } from "core/auth";

const Layout: React.FC = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth) {
      return;
    }

    dispatch(ACTIONS.requestServerList(auth.token));

    return () => {
      dispatch(ACTIONS.clearServerList());
    };
  }, []);

  return (
    <>
      <p>Server List</p>
      <button onClick={() => auth?.logout()}>logout</button>
    </>
  );
};

export default Layout;
