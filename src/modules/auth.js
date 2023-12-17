import AuthService from "@/api/auth"

const state = {
  loading: false
}

const mutations = {
  
}

const actions = {
  register( context, user) {
    return AuthService.register(user).then((res) => {
      console.log(res);
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