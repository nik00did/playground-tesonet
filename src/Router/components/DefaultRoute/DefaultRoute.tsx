import { Navigate } from "react-router-dom";
import { ROUTERS } from "../../../core/constants";

const DefaultRoute: React.FC = () => {
  return <Navigate to={ROUTERS.serverList} replace />;
};

export default DefaultRoute;
