export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
  id: string
  checkPassword: (password: string) => Promise<boolean>
}
