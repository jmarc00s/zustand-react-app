import { StateCreator } from 'zustand';
import { User } from '../models/user';
import axios from 'axios';

export interface UserSlice {
  users: User[];
  addUser: (user: User) => void;
  loadUsers: () => Promise<void>;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  users: [],
  addUser: (user: User) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  loadUsers: async () => {
    const { data: users } = await axios('/users');
    set({ users });
  },
});
