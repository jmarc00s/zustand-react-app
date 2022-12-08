import React from 'react';
import { UserForm, UserTable } from './components';

export const UsersSection = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <UserForm />
      <UserTable />
    </section>
  );
};
