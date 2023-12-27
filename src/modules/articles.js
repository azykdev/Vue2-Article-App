import ArticlesService from "@/api/articles"

const state = {
  loading: false,
  errors: null,
  articles: null
}

const getters = {
  
}

const mutations = {
  getArticlesStart(state) {
    state.loading = true
    state.errors = null
    state.articles = null
  },
  getArticlesSuccess(state, payload) {
    state.loading = false
    state.articles = payload
  },
  getArticlesFailure(state) {
    state.loading = false
  }
}

const actions = {
  getArticles({ commit }) {
    commit('getArticlesStart')
    return new Promise((resolve, reject) => {
      ArticlesService.articles().then((res) => {
        commit('getArticlesSuccess', res.data.articles)
        resolve(res)
      }).catch(() => {
        commit('getArticlesFailure')
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}