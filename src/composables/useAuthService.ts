import { register, login, logout, getCurrentUser } from '../services/authService'
import { ref } from 'vue'

const registerUsername = ref<string>('')
const registerPassword = ref<string>('')
const loginUsername = ref<string>('')
const loginPassword = ref<string>('')
const currentUser = ref<any>(getCurrentUser())
const errorMessage = ref<string | null>(null)
const isRegistered = ref<boolean>(false)

export default function useAuthService() {
  const handleRegister = async () => {
    try {
      await register(registerUsername.value, registerPassword.value)
      errorMessage.value = 'Inscription réussie. Vous allez être redirigé vers la page de connexion.'
      isRegistered.value = true
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
    isRegistered,
    handleRegister,
    handleLogin,
    handleLogout
  }

}
  