import { StateCreator } from 'zustand';
import { Profile } from '../models/profile';

export interface ProfileSlice {
  profiles: Profile[];
  addProfile: (name: string) => void;
  loadProfiles: () => void;
}

export const createProfileSlice: StateCreator<ProfileSlice> = (set) => ({
  profiles: [],
  addProfile: (name: string) => {},
  loadProfiles: async () => {
    const response = fetch('http://localhost:4000/profiles');
    set({ profiles: await (await response).json() });
  },
});
