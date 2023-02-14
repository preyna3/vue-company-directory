import { ref } from 'Vue'

const dbUser = [
  {
    username: 'admin',
    password: 'admin',
    name: 'admin',
    role: 'admin',
    email: 'admin@cool-company.com',
  },
  {
    username: 'user',
    password: 'user',
    name: 'user',
    role: 'user',
    email: 'user@cool-company.com',
  },
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
  const login = (username, password) => {
    const user = dbUser.find((u) => u.username === username && u.password === password)
    if (user) {
      const { name, role, email, username } = user
      isAuthenticated.value = true
      user.value = { name, role, email, username }
    }
  }
  return { isAuthenticated, user, login }
}
