import * as React from 'react';
import { ReactElement } from 'react';

interface Props {
  onNewRole: (role: String) => void;
}

export default function RoleSelect({ onNewRole }: Props): ReactElement {
  const handleInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onNewRole(event.currentTarget.value);
  };

  return (
    <div className="role-select">
      <h1>Choose your path</h1>
      <button
        className="role-select-button"
        value="mentor"
        onClick={handleInput}
      >
        <h2 className="role">Mentor</h2>
        <p className="role-description">Nurture future innovators</p>
      </button>
      <button
        className="role-select-button"
        value="mentee"
        onClick={handleInput}
      >
        <h2 className="role">Mentee</h2>
        <p className="role-description">Enter industry with confidence</p>
      </button>
    </div>
  );
}
