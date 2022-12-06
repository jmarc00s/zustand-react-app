import React from 'react';
import { ProfileTable } from './components/ProfilesTable';
import { UserTable } from './components/UserTable';

const UsersPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-gray-800 text-2xl font-semibold text-center">
        Users page
      </h1>
      <p className="text-center text-xs italic text-gray-400">
        (Async actions and slices)
      </p>

      <section className="flex gap-8">
        <UserTable />
        <ProfileTable />
      </section>
    </div>
  );
};

export default UsersPage;
