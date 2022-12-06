import { Table } from 'flowbite-react';
import { useUsersStore } from 'pages/Users/store';
import React, { useEffect } from 'react';

export const ProfileTable = () => {
  const { loadProfiles, profiles } = useUsersStore();

  useEffect(() => {
    async function getProfiles() {
      await loadProfiles();
    }

    getProfiles();
  }, []);

  return (
    <Table striped hoverable className="w-full">
      <Table.Head>
        <Table.HeadCell>Id</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {profiles.map((profile) => (
          <Table.Row key={profile.id}>
            <Table.Cell>{profile.id}</Table.Cell>
            <Table.Cell>{profile.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
