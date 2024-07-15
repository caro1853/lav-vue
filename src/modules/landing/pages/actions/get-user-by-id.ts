import type { User } from '@/interfaces/User';

export const getUserById = (id: any) => {
  const usersBD: User = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    password: 'password',
  };
  return usersBD;
};
