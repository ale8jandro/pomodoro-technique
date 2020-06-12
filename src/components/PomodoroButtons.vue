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
            this.setSelectedTime('pomodoroTime');
            this.setMinutes(this.pomodoroTime);
        },
        selectShortBreak() {
            this.setSelectedTime('shortBreakTime');
            this.setMinutes(this.shortBreakTime);
        },
        selectLongBreak() {
            this.setSelectedTime('longBreakTime');
            this.setMinutes(this.longBreakTime);
        },
    },
}
</script>