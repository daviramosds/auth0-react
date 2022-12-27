import { useAuth0 } from "@auth0/auth0-react";

export function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <button
          onClick={() => {
            logout();
          }}
          className="bg-red-500 text-white px-12 py-4 rounded transition-opacity hover:opacity-75"
        >
          Logout
        </button>
      )}
    </>
  );
}
