import AuthService from "@/api/auth"

const state = {
  loading: false,
  errors: null,
  user: null
}

const mutations = {
  registerStart(state) {
    state.loading = true
  },
  registerSuccess(state, payload) {
    state.loading = false
    state.user = payload
    state.errors = null
  },
  registerFailure(state, payload) {
    state.loading = false
    state.user = null
    state.errors = payload
  }
}

const actions = {
  register( context, user) {
    return new Promise((resolve, reject) => {
      context.commit('registerStart')
      AuthService.register(user).then((res) => {
        context.commit('registerSuccess', res.data.user)
        resolve(res)
      }).catch((error) => {
        context.commit('registerFailure', error.response.data.errors)
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