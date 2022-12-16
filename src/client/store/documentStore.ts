import create from 'zustand'

type WindowDocument = {
  isClient: boolean
  setIsClient: (isClient: boolean) => void
}

export const useDocumentStore = create<WindowDocument>((set) => ({
  isClient: false,
  setIsClient: (isClient: boolean) => set({ isClient: isClient }),
}))
