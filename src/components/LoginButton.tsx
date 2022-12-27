import { useAuth0 } from "@auth0/auth0-react";

export function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button
          onClick={() => {
            loginWithRedirect();
          }}
          className="bg-blue-500 text-white px-12 py-4 rounded transition-opacity hover:opacity-75"
        >
          Login
        </button>
      )}
    </>
  );
}
