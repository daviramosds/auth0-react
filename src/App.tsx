import "./styles/global.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import { User } from "./components/User";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <main className="flex items-center justify-center bg-white h-screen flex-col">
        {error && <p>Authentication Error</p>}
        {!error && !isLoading && <p>Loading</p>}
        {!error && isLoading && (
          <>
            <LoginButton />
            <User />
            <LogoutButton />
          </>
        )}
      </main>
    </Auth0Provider>
  );
}

export default App;
