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
    breaksNumber: 1,
    autoStartPomodoro: true,
    autoStartBreak: true,
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
    setCycles(state, newCycles) {
      state.cycles = newCycles;
    },
    incrementBreaksNumber(state) {
      state.breaksNumber += 1;
    },
    resetBreaksNumber(state) {
      state.breaksNumber = 1;
    },
  },
  actions: {
  },
  modules: {
    timer,
  },
});
