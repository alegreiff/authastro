import type { AdapterUser } from '@auth/core/adapters';
import GitHub from '@auth/core/providers/github';
import Google  from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    Google({
      clientId: import.meta.env.AUTH_GOOGLE_ID,
      clientSecret: import.meta.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT,
      clientSecret: import.meta.env.GITHUB_SECRET,
    }),
    
  ],
  /* callbacks: {
    jwt: ({token, user}) => {
      if(user) {
        token.user = user

      }
      return token;
  },
  session: ({session, token})=> {

    session.user = token.user as AdapterUser
    return session

  }
} */
});

