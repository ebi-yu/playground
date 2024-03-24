import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "antd";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    // IDトークンにアクセス
    return (
      <>
        Signed in as {session.user!.email} <br />
        <Button type="primary" onClick={() => signOut()}>
          Keycloak Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button type="primary" onClick={() => signIn()}>
        Keycloak Sign In
      </Button>
    </>
  );
}
