import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { UserType } from '../lib/types';

export const User = createContainer(() => {
  const [user, setUser] = useState<UserType | null>(null);

  return {
    user,
    setUser
  };
});
