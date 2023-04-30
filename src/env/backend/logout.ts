import { authConfig } from '@/config';

export const logout = async (token: string) => {
  return await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signOut?key=${authConfig.key}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
