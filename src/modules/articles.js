import ArticlesService from "@/api/articles"

const state = {
  loading: false,
  errors: null,
  articles: null,
  articleBySlug: null
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
  },

  getArticleBySlugStart(state) {
    state.loading = true
    state.errors = null
    state.articleBySlug = null
  },
  getArticleBySlugSuccess(state, payload) {
    state.loading = false
    state.articleBySlug = payload
  },
  getArticleBySlugFailure(state) {
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
  },

  getArticleBySlug({ commit }, slug) {
    commit('getArticleBySlugStart')
    return new Promise((resolve, reject) => {
      ArticlesService.article(slug).then((res) => {
        commit('getArticleBySlugSuccess', res.data.article)
        resolve(res)
      }).catch(() => {
        commit('getArticleBySlugFailure')
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