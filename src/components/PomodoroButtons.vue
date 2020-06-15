<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn rounded depressed @click="selectPomodoro">Pomodoro</v-btn>
            </v-col>
            <v-col>
                <v-btn rounded depressed @click="selectShortBreak">Short Break</v-btn>
            </v-col>
            <v-col>
                <v-btn rounded depressed @click="selectLongBreak">Long Break</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'PomodoroButtons',
    computed: {
        ...mapState(['pomodoroTime', 'shortBreakTime', 'longBreakTime']),
    },
    methods: {
        ...mapMutations(['setSelectedTime']),
        ...mapMutations('timer', ['setMinutes']),
        selectPomodoro() {
            this.selectTime('pomodoroTime', this.pomodoroTime);
        },
        selectShortBreak() {
            this.selectTime('shortBreakTime', this.shortBreakTime);
        },
        selectLongBreak() {
            this.selectTime('longBreakTime', this.longBreakTime);
        },
        selectTime(timeName, time) {
            this.setSelectedTime(timeName);
            this.setMinutes(time);
            this.$eventBus.$emit('setTime', time);
        },
    },
}
</script>