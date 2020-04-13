import * as React from 'react';
export interface RoleSelectProps {
  onNewRole: (role: String) => void;
}
export const RoleSelect: React.FC<RoleSelectProps> = ({ onNewRole }) => {
  const handleInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onNewRole(event.currentTarget.value);
  };

  return (
    <div className="role-select">
      <h2>Choose your path</h2>
      <button
        className="role-select-button"
        value="mentor"
        onClick={handleInput}
      >
        <span className="role">Mentor</span>
        <span className="role-description">Nurture future innovators</span>
      </button>
      <button
        className="role-select-button"
        value="mentee"
        onClick={handleInput}
      >
        <span className="role">Mentee</span>
        <span className="role-description">Enter industry with confidence</span>
      </button>
    </div>
  );
};
