import { StateCreator } from 'zustand';
import { User } from '../models/user';
import axios from 'axios';

export interface UserSlice {
  users: User[];
  addUser: (user: Partial<User>) => void;
  loadUsers: () => Promise<void>;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  users: [],
  addUser: async (data: Partial<User>): Promise<void> => {
    const response = await axios.post<User>('/users', data);

    if (response.status === 201) {
      const user = response.data;

      set((state) => ({
        users: [...state.users, user],
      }));
    }
  },
  loadUsers: async () => {
    const { data: users } = await axios('/users');
    set({ users });
  },
});
