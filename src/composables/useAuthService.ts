import { register, login, logout, getCurrentUser } from '../service'
import { ref } from 'vue'

const registerUsername = ref<string>('')
const registerPassword = ref<string>('')
const loginUsername = ref<string>('')
const loginPassword = ref<string>('')
const currentUser = ref<any>(getCurrentUser())
const errorMessage = ref<string | null>(null)

export default function useAuthService() {
  const handleRegister = async () => {
    try {
      await register(registerUsername.value, registerPassword.value)
      errorMessage.value = 'Inscription réussie. Vous pouvez maintenant vous connecter.'
    } catch (error) {
      errorMessage.value = 'Erreur lors de l\'inscription.'
      console.error(error)
    }
  }

  const handleLogin = async () => {
    try {
      const user = await login(loginUsername.value, loginPassword.value)
      currentUser.value = user
      errorMessage.value = null
    } catch (error) {
      errorMessage.value = 'Erreur lors de la connexion.'
      console.error(error)
    }
  }

  const handleLogout = () => {
    logout()
    currentUser.value = null
    errorMessage.value = null
  }

  return {
    registerUsername,
    registerPassword,
    loginUsername,
    loginPassword,
    currentUser,
    errorMessage,
    handleRegister,
    handleLogin,
    handleLogout
  }

}
  