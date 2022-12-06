import { useUsersStore } from 'pages/Users/store';
import React, { useEffect } from 'react';

export const ProfileTable = () => {
  const { loadProfiles } = useUsersStore();

  useEffect(() => loadProfiles(), []);

  return <div>ProfileTable</div>;
};
