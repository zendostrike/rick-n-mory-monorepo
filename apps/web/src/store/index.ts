import { create } from 'zustand';

type AppState = {
  page: number;
  name: string;
  species: string;
  status: string;
  nextPage: () => void;
  prevPage: () => void;
  onChangeName: (value: string) => void;
  onChangeSpecies: (value: string) => void;
};

export const useStore = create<AppState>((set) => ({
  page: 1,
  name: '',
  species: '',
  status: '',
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
  onChangeName: (value: string) => {
    set(() => ({ page: 1, name: value }));
  },
  onChangeSpecies: (value: string) => {
    set(() => ({ page: 1, species: value }));
  },
}));
