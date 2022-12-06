import { StateCreator } from 'zustand';
import { Profile } from '../models/profile';

export interface ProfileSlice {
  profiles: Profile[];
  addProfile: (name: string) => void;
  loadProfiles: () => void;
}

export const createProfileSlice: StateCreator<ProfileSlice> = (set) => ({
  profiles: [],
  addProfile: (name: string) => {
    set((state) => {
      const profile: Profile = { name };
      return {
        profiles: [...state.profiles, profile],
      };
    });
  },
  loadProfiles: () => {
    console.log('load profiles');
  },
});
