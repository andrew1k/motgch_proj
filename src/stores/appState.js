import {defineStore} from 'pinia'
import {ref} from 'vue'

// const errorCodes = {
//   // CREDENTIAL_TOO_OLD_LOGIN_AGAIN: `Учетные данные больше недействительны. Пожалуйста, войдите снова в систему`,
//   // EMAIL_EXISTS: `Адрес электронной почты уже используется`,
//   // EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
//   // INVALID_EMAIL: `Неправильно введен email`,
//   // INVALID_ID_TOKEN: `Учетные данные больше недействительны. Пожалуйста, войдите снова в систему`,
//   // INVALID_PASSWORD: 'Неверный пароль',
//   // INVALID_REFRESH_TOKEN: `Предоставлен недопустимый токен обновления.`,
//   // USER_NOT_FOUND: `Нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален`,
//   // MISSING_REFRESH_TOKEN: `Токен обновления не предоставлен`,
//   // OPERATION_NOT_ALLOWED: `для этого проекта отключен вход с паролем`,
//   // TOKEN_EXPIRED: `Учетные данные больше недействительны. Пожалуйста, войдите снова в систему`,
//   // TOO_MANY_ATTEMPTS_TRY_LATER: `Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже`,
//   // USER_DISABLED: 'Учетная запись отключена администратором',
//   // WEAK_PASSWORD: `Пароль должен состоять из 6 или более символов`,
//   'auth/user-not-found':'Пользователь с таким email не найден',
//   MISSING_EMAIL:'Пользователь с таким email не найден',
//   'auth/wrong-password':'Неверный пароль',
// }

export const useSnackbarMessages = defineStore('snackbarMessages', () => {
  const snackbarMessage = ref(null)
  const setMessage = (message) => {
    snackbarMessage.value = message
    setTimeout(() => snackbarMessage.value = null, 7000)
  }
  return {
    snackbarMessage,
    setMessage,
  }
})

export const useAppState = defineStore('appState', () => {
  const drawer = ref(null)
  const theme = ref('mbvLight')
  const isPending = ref(false)

  const handleTheme = () => {
    if (theme.value === 'dark') theme.value = 'mbvLight'
    else theme.value = 'dark'
  }
  return {
    drawer,
    theme,
    isPending,
    handleTheme
  }
})