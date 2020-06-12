export default {
    namespaced: true,
    state: {
        minutes: 0,
        seconds: 0,
        finished: true,
    },
    mutations: {
        decrementSecond(state) {
            if (state.seconds === 0 && state.minutes === 0) {
                state.finished = true;
            } else if (state.seconds === 0) {
                state.seconds = 59;
                state.minutes -= 1;
            } else {
                state.seconds -= 1;
            }
        },
        startCounting(state) {
            state.finished = false;
        },
        setMinutes(state, payload) {
            state.minutes = payload;
            state.seconds = 0;
        },
        resetTimer(state, payload) {
            state.seconds = 0;
            state.finished = true;
            state.minutes = payload;
        },
    },
}