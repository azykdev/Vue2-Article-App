import AuthService from "@/api/auth"
import { setItem } from "@/helpers/persistaneStorage"
import { gettersTypes } from "@/modules/types"

const state = {
  loading: false,
  errors: null,
  user: null,
  isLoggedIn: null
}

const getters = {
  
  [gettersTypes.GET_USER] (state) {
    return state.user
  },
  [gettersTypes.GET_ISLOGGEDIN] (state) {
    return Boolean(state.isLoggedIn)
  },
  [gettersTypes.GET_ISANONYMOUS] (state) {
    return state.isLoggedIn === false
  }
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
  },

  currentUserStart(state) {
    state.loading = true
  },
  currentUserSuccess(state, payload) {
    state.loading = false
    state.user = payload
    state.isLoggedIn = true
  },
  currentUserFailure(state) {
    state.loading = false
    state.user = null
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
  },
  getCurrentUser( context) {
    return new Promise((resolve) => {
      context.commit('currentUserStart')
      AuthService.getCurrentUser().then((res) => {
        context.commit('currentUserSuccess', res.data.user)
        resolve(res)
      }).catch(() => {
        context.commit('currentUserFailure')
      })
    })
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}