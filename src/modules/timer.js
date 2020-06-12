export default {
    namespaced: true,
    state: {
        minutes: 25,
        seconds: 0,
        counterFinished: false,
        percentage: 0,
    },
    mutations: {
        decrementSecond(state, actualTime) {
            if (state.seconds === 0 && state.minutes === 0) {
                state.counterFinished = true;
            } else if (state.seconds === 0) {
                state.seconds = 59;
                state.minutes -= 1;
            } else {
                state.seconds -= 1;
            }
            const totalSeconds = actualTime * 60;
            const secondsElapseds = totalSeconds - (state.minutes * 60 + state.seconds);
            state.percentage = ((secondsElapseds/totalSeconds) * 100).toFixed(3);
        },
        startCounting(state) {
            state.counterFinished = false;
        },
        setMinutes(state, payload) {
            state.minutes = payload;
            state.seconds = 0;
        },
        resetTimer(state, payload) {
            state.seconds = 0;
            state.counterFinished = false;
            state.minutes = payload;
            state.percentage = 0;
        },
    },
}