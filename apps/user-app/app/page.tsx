import { Appbar } from "@flowpay/ui/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function UserApp() {
  const session = useSession();

  return (
    <div>
      <h1 className="text-green-400">Hi. This is user app</h1>
      <Appbar
        onSignin={signIn}
        onSignout={signOut}
        user={session.data?.user}
      />
    </div>
  );
}
