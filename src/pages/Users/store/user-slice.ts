import { StateCreator } from 'zustand';
import { User } from '../models/user';

export interface UserSlice {
  users: User[];
  addUser: (user: User) => void;
  loadUsers: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  users: [],
  addUser: (user: User) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  loadUsers: () => {
    console.log('loadUsers');
  },
});
