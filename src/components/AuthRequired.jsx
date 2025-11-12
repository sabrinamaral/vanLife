import { Navigate, Outlet } from "react-router-dom";

// ⚠️ There is no authentication in place, so this is only to simulate the auth behavior.
export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first" }}
        replace
      />
    );
  }
  return <Outlet />;
}
