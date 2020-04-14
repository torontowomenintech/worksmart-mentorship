import React, { useState, useEffect } from 'react';
import RoleSelect from './RoleSelect';
import SignupForm from './SignupForm';

const SignupPage = () => {
  const [role, setRole] = useState<String>('');

  return (
    <main className="signup">
      {!role ? (
        // If no role show the role select component, otherwise show signup form
        <RoleSelect
          onNewRole={role => {
            setRole(role);
          }}
        />
      ) : (
        <SignupForm goBack={() => setRole('')} role={role} />
      )}
    </main>
  );
};

export default SignupPage;
