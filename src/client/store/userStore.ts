import create from 'zustand'

type User = {
  firstName: string | null
  lastName: string | null
  password: string | null
  email: string | null
  jwtToken: string | null
}

type CurrentUser = {
  user: User | null
  updateUser: (user: User) => void
}

export const useUserStore = create<CurrentUser>((set) => ({
  user: null,
  updateUser: (newUser: User) => set({ user: newUser }),
}))
