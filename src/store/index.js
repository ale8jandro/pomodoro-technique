import Vue from 'vue';
import Vuex from 'vuex';
import timer from '../modules/timer'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    cycles: 4,
    selectedTime: 'pomodoroTime',
    breaksNumber: 0,
    autoStartPomodoro: true,
    autoStartBreak: true,
    oneMinuteNotification: false,
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
    setSelectedTime(state, newSelectedTime) {
      state.selectedTime = newSelectedTime;
    },
    setAutoStartPomodoro(state, newAutoStartPomodoro) {
      state.autoStartPomodoro = newAutoStartPomodoro;
    },
    setAutoStartBreak(state, newAutoStartBreak) {
      state.autoStartBreak = newAutoStartBreak;
    },
    setOneMinuteNotification(state, newOneMinuteNotification) {
      state.oneMinuteNotification = newOneMinuteNotification;
    },
  },
  actions: {
  },
  modules: {
    timer,
  },
});
