import { useAuth0 } from "@auth0/auth0-react";

export function User() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div className="flex flex-col items-center justify-center max-w-2xl p-12 mb-4 text-zinc-600 rounded border-2 border-zinc-500">
          <img src={user?.picture} className="rounded-full" />

          <div>
            {
              // @ts-ignore
              Object.keys(user).map((key, i) => (
                // @ts-ignore
                <h2 key={i}>  {key}: {user[key]}
                </h2>
              ))
            }
          </div>
        </div>
      )}
    </>
  );
}
