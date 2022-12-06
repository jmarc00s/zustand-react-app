import create from 'zustand';
import { createProfileSlice, ProfileSlice } from './profile-slice';
import { createUserSlice, UserSlice } from './user-slice';

export const useUsersStore = create<UserSlice & ProfileSlice>((...state) => ({
  ...createUserSlice(...state),
  ...createProfileSlice(...state),
}));
