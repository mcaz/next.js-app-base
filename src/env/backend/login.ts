import { authConfig } from '@/config';

export const login = async (email: string, password: string) => {
  const body = JSON.stringify({ email, password, returnSecureToken: true });

  return await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authConfig.key}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );
};
