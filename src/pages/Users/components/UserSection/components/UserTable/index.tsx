import React, { useEffect } from 'react';
import { useUsersStore } from 'pages/Users/store';
import { Table } from 'flowbite-react';
import { ProfileBadge } from '../ProfilePill';

export const UserTable = () => {
  const { loadUsers, users, profiles } = useUsersStore();

  useEffect(() => {
    async function getUsers() {
      await loadUsers();
    }

    getUsers();
  }, []);

  return (
    <div className="w-full">
      <Table striped hoverable className="w-full">
        <Table.Head>
          <Table.HeadCell>Id</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Login</Table.HeadCell>
          <Table.HeadCell>Age</Table.HeadCell>
          <Table.HeadCell>Profile</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.login}</Table.Cell>
              <Table.Cell>{user.age}</Table.Cell>
              <Table.Cell className="flex items-center justify-start">
                <ProfileBadge
                  profile={profiles.find(
                    (profile) => profile.id === user.profileId
                  )}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
