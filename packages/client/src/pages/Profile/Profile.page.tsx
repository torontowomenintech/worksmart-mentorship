import React from 'react';
import ApplicationStatus from './ApplicationStatus';
import { User } from '../../containers/user.container';

const ProfilePage = () => {
  const { user } = User.useContainer();

  console.log(user);

  return (
    <div className="profile-page">
      <div className="profile-summary">
        <h1>Your account</h1>
        <div className="profile-summary--img-container">
          <img
            src=""
            alt={`${user?.data.user.name}'s profile image`}
            className="profile-summary--img"
          />
        </div>
      </div>
      <ApplicationStatus />
    </div>
  );
};

export default ProfilePage;
