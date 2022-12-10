const errorCodes = {
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: `Учетные данные больше недействительны. Пожалуйста, войдите снова в систему`,
  EMAIL_EXISTS: `Адрес электронной почты уже используется`,
  EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
  INVALID_EMAIL: `Неправильно введен email`,
  INVALID_ID_TOKEN: `Учетные данные больше недействительны. Пожалуйста, войдите снова в систему`,
  INVALID_PASSWORD: 'Неверный пароль',
  INVALID_REFRESH_TOKEN: `Предоставлен недопустимый токен обновления.`,
  USER_NOT_FOUND: `Нет записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален`,
  MISSING_REFRESH_TOKEN: `Токен обновления не предоставлен`,
  OPERATION_NOT_ALLOWED: `для этого проекта отключен вход с паролем`,
  TOKEN_EXPIRED: `Учетные данные больше недействительны. Пожалуйста, войдите снова в систему`,
  TOO_MANY_ATTEMPTS_TRY_LATER: `Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже`,
  USER_DISABLED: 'Учетная запись отключена администратором',
  WEAK_PASSWORD: `Пароль должен состоять из 6 или более символов`,
  'auth/user-not-found':'Пользователь с таким email не найден',
  'auth/wrong-password':'Неверный пароль',
}

function handleErrors(code) {
  return errorCodes[code] ? errorCodes[code] : code
}

export default {
  namespaced: true,
  state() {
    return {
      message: null,
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      state.message = null
    }
  },
  actions: {
    async setMessage({commit}, message) {
      console.log(`from message state: ${message}`)
      await commit('setMessage',  handleErrors(message))
      await setTimeout(() => {
        commit('clearMessage')
      },   8000)
    },
  },
  getters: {
    getMessage(state) {
      return state.message
    }
  }
}