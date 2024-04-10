import { create } from 'zustand'

export type Selected = {
  name:string
  type: 'Chat' | 'Info'
}

interface SelectedInfo {
  selected: Selected 
  setSelected: (selected: Selected) => void
}

export const useSelectedInfo = create<SelectedInfo>((set) => ({
  selected:  { name: '', type: 'Info'} ,
  setSelected: (selected) => set({ selected }),
}))
