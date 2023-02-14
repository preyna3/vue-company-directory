import { ref } from 'vue'

const dbUser = [
  {
    username: 'admin',
    password: 'admin',
    role: 'Admin',
    email: 'admin@cool-company.com',
  },
  {
    username: 'user',
    password: 'user',
    role: 'User',
    email: 'user@cool-company.com',
  },
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
  const login = (username, password) => {
    console.log(username)
    const user = dbUser.find((u) => u.username === username && u.password === password)
    if (user) {
      const { name, role, email, username } = user
      isAuthenticated.value = true
      user.value = { name, role, email, username }
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = {}
  }
  return { isAuthenticated, user, login, logout }
}
