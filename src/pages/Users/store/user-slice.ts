import { StateCreator } from 'zustand';
import { User } from '../models/user';

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
    const response = await fetch('http://localhost:4000/users');
    set({ users: await response.json() });
  },
});
