import { create } from 'zustand';

interface UserState {
  user: { id: string; email: string; username: string; level: number } | null;
  setUser: (user: {
    id: string;
    email: string;
    username: string;
    level: number;
  }) => void;
}

export const useStoreUser = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user: user }),
}));
