import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { UserType } from '../lib/types';

export interface UserRes {
  token: string;
  data: {
    user: UserType;
  };
}

export const User = createContainer(() => {
  const [user, setUser] = useState<UserRes | null>(null);

  return {
    user,
    setUser
  };
});
