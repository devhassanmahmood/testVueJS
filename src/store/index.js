import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blocks: []
  },

  mutations: {
    SET_BLOCKS(state, blocks) {
      state.blocks = blocks;
    }
  },

  getters: {
    blocks: state => state.blocks
  },

  actions:  {
    setBlocks({ commit }, blocks) {
      commit('SET_BLOCKS', blocks)
    }
  }
})
