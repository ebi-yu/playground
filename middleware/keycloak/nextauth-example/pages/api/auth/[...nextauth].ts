import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID!,
      clientSecret: process.env.KEYCLOAK_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        if (account.access_token) {
          console.log("Access Token");
          console.log(account.access_token);
        }
        if (account.id_token) {
          console.log("ID Token");
          console.log(account.id_token);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.access_token) {
        console.log("Access Token");
        console.log(token.access_token);
      }
      if (token.id_token) {
        console.log("ID Token");
        console.log(token.id_token);
      }
      return session;
    },
  },
});
