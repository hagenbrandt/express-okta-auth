import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // recipes: recipesReducer,
    // users: usersReducer,
    test: testSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store