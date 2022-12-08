import React, { MutableRefObject, SyntheticEvent, useRef } from 'react';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { useUsersStore } from 'pages/Users/store';
import { User } from 'pages/Users/models/user';

export const UserForm = () => {
  const { profiles, addUser } = useUsersStore();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const profileRef = useRef<HTMLSelectElement | null>(null);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formValues: Partial<User> = {
      name: nameRef?.current?.value || '',
      age: Number(ageRef?.current?.value) || 0,
      login: loginRef?.current?.value || '',
      profileId: Number(profileRef?.current?.value),
    };

    console.log(formValues);
    await addUser(formValues);
    resetForm();
  };

  const resetForm = () => {
    nameRef.current!.value! = '';
    ageRef.current!.value! = '';
    loginRef.current!.value! = '';
    profileRef.current!.value! = '';
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-8">
      <Label htmlFor="name" value="Name" />

      <TextInput
        placeholder="Name"
        id="name"
        type="text"
        required
        ref={nameRef}
      />

      <div className="flex gap-4 w-full my-4">
        <div className="w-full">
          <Label htmlFor="age" value="Age" />
          <TextInput
            placeholder="age"
            id="age"
            type="number"
            required
            ref={ageRef}
          />
        </div>

        <div className="w-full">
          <Label htmlFor="login" value="Login" />
          <TextInput
            placeholder="Login"
            id="login"
            type="text"
            required
            ref={loginRef}
          />
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="profile" value="Profile" />
        <Select
          id="profile"
          placeholder="Select a profile"
          required
          ref={profileRef}
          defaultValue={''}
        >
          <option disabled value={''}>
            Select a profile
          </option>
          {profiles.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </div>

      <Button className="w-full" type="submit">
        Save
      </Button>
    </form>
  );
};
