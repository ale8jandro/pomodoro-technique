<template>
    <v-progress-linear
        :value="percentage"
        height="150"
        reactive
        :color="progressColor">
        <strong class="display-4">{{ `${minutesFormatted}:${secondsFormatted}` }}</strong>
    </v-progress-linear>
</template>

<script>
import { mapState } from 'vuex';

const times = {
    POMODORO_TIME: {
        name: 'pomodoroTime',
        color: 'red',
    },
    SHORT_BREAK_TIME: {
        name: 'shortBreakTime',
        color: 'teal',
    },
    LONG_BREAK_TIME: {
        name: 'longBreakTime',
        color: 'cyan',
    },
};
export default {
    name: 'Timer',
    computed: {
        ...mapState('timer', ['minutes', 'seconds', 'percentage']),
        ...mapState(['selectedTime']),
        minutesFormatted() {
            if (this.minutes < 10) {
                return `0${this.minutes}`;
            }
            return this.minutes;
        },
        secondsFormatted() {
            if (this.seconds < 10) {
                return `0${this.seconds}`;
            }
            return this.seconds;
        },
        progressColor() {
            let color = 'red';
            if (this.selectedTime === times.POMODORO_TIME.name) {
                color = times.POMODORO_TIME.color;
            } else if (this.selectedTime === times.SHORT_BREAK_TIME.name) {
                color = times.SHORT_BREAK_TIME.color;
            } else {
                color = times.LONG_BREAK_TIME.color;
            }
            return color;
        },
    },
}
</script>