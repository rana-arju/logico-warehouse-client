import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/loading/Loading";
import Cookies from "js-cookie";

function RequireAuth({ children }) {
  let location = useLocation();
  const [user, setUser] = useState(
    Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
  );
console.log("user", user);
    // const us = JSON.parse(Cookies.get("user"));
    // setUser(us);
 

  // if (loading) {
  //   return <Loading />
  // }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth;
