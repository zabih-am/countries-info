import { getLocalStorage, setLocalStorage } from '@/utils/localstorage'

export default {
  namespaced: true,
  state: {
    themeMode: getLocalStorage('theme') ?? 'light'
  },

  mutations: {
    UPDATE_THEME(state, val) {
      state.themeMode = val
      setLocalStorage('theme', val)

      if(val === 'dark') {
        document.body.classList.add('dark-layout')
      } else if(document.body.className.match('dark-layout')) {
        document.body.classList.remove('dark-layout')
      }
    }
  }
}