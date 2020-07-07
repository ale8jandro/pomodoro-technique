<template>
    <v-container>
        <audio id="ringAudio">
            <source src="../../public/ring.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <v-row>
            <v-col>
                <v-btn icon>
                    <v-icon size="80" color="red" @click="playClick">{{ iconPlay }}</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn icon>
                    <v-icon size="80" color="red" @click="stopClick">mdi-stop</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn icon>
                    <v-icon size="80" color="red" @click="refreshClick">mdi-refresh</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

const icons = {
    play: 'mdi-play',
    pause: 'mdi-pause',
};
const times = {
    POMODORO_TIME: 'pomodoroTime',
    SHORT_BREAK_TIME: 'shortBreakTime',
    LONG_BREAK_TIME: 'longBreakTime',
};
let intervalFunction;

export default {
    name: 'TimerButtons',
    data: () => ({
        iconPlay: 'mdi-play',
    }),
    computed: {
        ...mapState('timer', ['counterFinished']),
        ...mapState(['pomodoroTime', 'shortBreakTime', 'longBreakTime', 'selectedTime', 'cycles', 'breaksNumber', 'autoStartBreak', 'autoStartPomodoro', 'reproduceAudio']),
    },
    methods: {
        ...mapMutations('timer', ['decrementSecond', 'startCounting', 'resetTimer']),
        ...mapMutations(['setSelectedTime', 'incrementBreaksNumber', 'resetBreaksNumber']),
        playClick() {
            if (this.iconPlay === icons.play) {
                this.iconPlay = icons.pause;
                intervalFunction = setInterval(this.decrementSecond, 1000, this.getActualTime());
            } else {
                this.iconPlay = icons.play;
                clearInterval(intervalFunction);
            }
        },
        stopClick() {
            this.resetBreaksNumber();
            this.setTime(this.pomodoroTime);
            this.setSelectedTime(times.POMODORO_TIME);
        },
        refreshClick() {
            this.resetTimer(this.getActualTime());
        },
        nextStage() {
            clearInterval(intervalFunction);
            if (this.reproduceAudio) {
                const audioElement = document.getElementById('ringAudio');
                audioElement.play();
            }
            if (this.selectedTime === times.POMODORO_TIME) {
                this.startBreakTime();
            } else {
                this.startPomodoroTime();
            }
        },
        startPomodoroTime() {
            if (this.selectedTime === times.LONG_BREAK_TIME) {
                this.stopClick();
            } else {
                this.setSelectedTime(times.POMODORO_TIME);
                this.incrementBreaksNumber();
                this.resetTimer(this.getActualTime());
                if (this.autoStartPomodoro) {
                    intervalFunction = setInterval(this.decrementSecond, 1000, this.getActualTime());
                } else {
                    this.iconPlay = icons.play;
                }
            }
        },
        startBreakTime() {
            this.setSelectedTime(this.cycles === this.breaksNumber ? times.LONG_BREAK_TIME : times.SHORT_BREAK_TIME);
            this.resetTimer(this.getActualTime());
            this.checkAutoStartBreak();
        },
        checkAutoStartBreak() {
            if (this.autoStartBreak) {
                intervalFunction = setInterval(this.decrementSecond, 1000, this.getActualTime());
            } else {
                this.iconPlay = icons.play;
            }
        },
        getActualTime() {
            return this[this.selectedTime];
        },
        setTime(time) {
            this.iconPlay = icons.play;
            clearInterval(intervalFunction);
            this.resetTimer(time);
        },
    },
    watch: {
        counterFinished(newValue, oldValue) {
            if (!oldValue && newValue) {
                this.nextStage();
            }
        },
    },
    created() {
        this.$eventBus.$on('setTime', this.setTime);
        this.$eventBus.$on('resetTimer', this.stopClick);
    },
}
</script>