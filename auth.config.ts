import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export default {
  providers: [GitHub],
  callbacks: {
    // jwt で返却した値を token で受け取る
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.sub as string;
      }

      return session;
    },
    // トークンをいじりたい場合はこの設定を変更する。
    // おそらくデフォルトでは下の例のように token のオブジェクトをそのまま返却している。
    // async jwt({ session, token, user }) {
    //   return { token };
    // },
  },
} satisfies NextAuthConfig;
