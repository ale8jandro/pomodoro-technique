import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
  mutations: {
    setPomodoroTime(state, newTime) {
      state.pomodoroTime = newTime;
    },
    setShortBreakTime(state, newTime) {
      state.shortBreakTime = newTime;
    },
    setLongBreakTime(state, newTime) {
      state.longBreakTime = newTime;
    },
  },
  actions: {
  },
});
