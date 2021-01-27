import { useEffect } from "react";
import { Link } from "react-router-dom";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  return (
    <>
      <div>You are logged out</div>
      <Link to="/">Log in here</Link>
    </>
  );
}

export default Logout;
