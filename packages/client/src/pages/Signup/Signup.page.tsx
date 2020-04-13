import React, { useState, useEffect } from 'react';
import { RoleSelect } from './RoleSelect';

const SignupPage = () => {
  const [role, setRole] = useState<String>('');

  useEffect(() => {
    console.log(role);
  }, [role]);

  return (
    <main className="signup">
      <RoleSelect
        onNewRole={role => {
          setRole(role);
        }}
      />
    </main>
  );
};

export default SignupPage;
