import { StateCreator } from 'zustand';
import { Profile } from '../models/profile';
import axios from 'axios';
export interface ProfileSlice {
  profiles: Profile[];
  addProfile: (name: string) => void;
  loadProfiles: () => void;
}

export const createProfileSlice: StateCreator<ProfileSlice> = (set) => ({
  profiles: [],
  addProfile: (name: string) => {},
  loadProfiles: async () => {
    const { data: profiles } = await axios('/profiles');
    set({ profiles });
  },
});
