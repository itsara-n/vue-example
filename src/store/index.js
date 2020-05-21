import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    loading: false,
    tasks: [],
  },

  mutations: {
    waitingForSetTasks(state) {
      state.loading = true;
    },
    setTasks(state, tasks = []) {
      state.loading = false;
      state.tasks = tasks;
    },
  },

  actions: {
    createNewTasks({ commit, state }, newTask = {}) {
      commit('waitingForSetTasks');
      const newTasks = [
        newTask,
        ...state.tasks,
      ];
      commit('setTasks', newTasks);
    },
    deleteTaskById({ commit, state }, id) {
      commit('waitingForSetTasks');
      const newTasks = state.tasks.filter((task) => task.id !== id);
      commit('setTasks', newTasks);
    },
  },

  modules: {
  },

});
