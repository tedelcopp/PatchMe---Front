import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      redirectUri: `${window.location.origin}/callback`, // Especificar la URL de redirección
    });
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LogIn;
