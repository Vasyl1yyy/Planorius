import { create } from 'zustand';

interface UserState {
  user: {
    id: string;
    email: string;
    username: string;
    level: number;
    avatar: string;
    banner: string;
  } | null;
  setUser: (user: {
    id: string;
    email: string;
    username: string;
    level: number;
    avatar: string;
    banner: string;
  }) => void;
}

interface TasksState {
  tasks: {
    id: number;
    userId: string;
    title: string;
    difficulty: number;
    proirity: number;
    tag: string;
    date: number;
    time: number;
  } | null;
  setTasks: (tasks: {
    id: number;
    userId: string;
    title: string;
    difficulty: number;
    proirity: number;
    tag: string;
    date: number;
    time: number;
  }) => void;
}

interface TagState {
  tags:
    | {
        id: number;
        title: string;
      }[]
    | null;
  setTags: (tags: { id: number; title: string }[]) => void;
}

export const useStoreUser = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user: user }),
}));

export const useStoreTasks = create<TasksState>((set) => ({
  tasks: null,
  setTasks: (tasks) => set({ tasks: tasks }),
}));

export const useStoreTags = create<TagState>((set) => ({
  tags: null,
  setTags: (tags) => set({ tags: tags }),
}));
