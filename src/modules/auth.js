import AuthService from "@/api/auth"
import { setItem } from "@/helpers/persistaneStorage"

const state = {
  loading: false,
  errors: null,
  user: null,
  isLoggedIn: null
}

const mutations = {
  registerStart(state) {
    state.loading = true
    state.errors = null
    state.user = null
    state.isLoggedIn = null
  },
  registerSuccess(state, payload) {
    state.loading = false
    state.user = payload
    state.isLoggedIn = true
  },
  registerFailure(state, payload) {
    state.loading = false
    state.errors = payload
    state.isLoggedIn = false
  },
  loginStart(state) {
    state.loading = true
    state.errors = null
    state.user = null
    state.isLoggedIn = null
  },
  loginSuccess(state, payload) {
    state.loading = false
    state.user = payload
    state.isLoggedIn = true
  },
  loginFailure(state, payload) {
    state.loading = false
    state.errors = payload
    state.isLoggedIn = false
  }
}

const actions = {
  register( context, user) {
    return new Promise((resolve, reject) => {
      context.commit('registerStart')
      AuthService.register(user).then((res) => {
        context.commit('registerSuccess', res.data.user)
        setItem('token', res.data.user.token)
        resolve(res)
      }).catch((error) => {
        context.commit('registerFailure', error.response.data.errors)
        reject(error)
      })
    })
  },
  login( context, user) {
    return new Promise((resolve, reject) => {
      context.commit('loginStart')
      AuthService.login(user).then((res) => {
        context.commit('loginSuccess', res.data.user)
        setItem('token', res.data.user.token)
        resolve(res)
      }).catch((error) => {
        context.commit('loginFailure', error.response.data.errors)
        reject(error)
      })
    })
  }
}

const getters = {
  
}


export default {
  state,
  getters,
  actions,
  mutations
}