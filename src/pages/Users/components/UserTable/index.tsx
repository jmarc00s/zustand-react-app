import React, { useEffect } from 'react';
import { useUsersStore } from 'pages/Users/store';
import { Table } from 'flowbite-react';

export const UserTable = () => {
  const { loadUsers, users } = useUsersStore();

  useEffect(() => {
    async function load() {
      await loadUsers();
    }

    load();
  }, []);

  return (
    <Table striped hoverable className="w-full">
      <Table.Head>
        <Table.HeadCell>Id</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Login</Table.HeadCell>
        <Table.HeadCell>Age</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.login}</Table.Cell>
            <Table.Cell>{user.age}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
