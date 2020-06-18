<template>
    <div>
        <v-btn rounded depressed @click="openDialog">Settings</v-btn>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="red">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="saveSettings">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-list three-line subheader class="text-left">
                    <v-subheader>Set Custom Times (in minutes)</v-subheader>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field label="Pomodoro Time" v-model="pomodoroTimeTemporal"></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field label="Short Break" v-model="shortBreakTimeTemporal"></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field label="Long Break" v-model="longBreakTimeTemporal"></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field label="Number of cycles" v-model="cyclesTemporal"></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader class="text-left">
                    <v-subheader>General</v-subheader>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="autoStartPomodoroTemporal"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Auto Start Pomodoro</v-list-item-title>
                            <v-list-item-subtitle>Auto start the Pomodoro Time without interaction of the user.</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="autoStartBreakTemporal"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Auto Start Breaks</v-list-item-title>
                            <v-list-item-subtitle>Auto start the breaks without interaction of the user.</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'CustomizeSettings',
    data: () => ({
        dialog: false,
        autoStartPomodoroTemporal: true,
        autoStartBreakTemporal: true,
        pomodoroTimeTemporal: 25,
        shortBreakTimeTemporal: 5,
        longBreakTimeTemporal: 15,
        cyclesTemporal: 4,
    }),
    computed: {
        ...mapState(['pomodoroTime', 'shortBreakTime', 'longBreakTime', 'autoStartPomodoro', 'autoStartBreak', 'cycles']),
    },
    methods: {
        ...mapMutations(['setPomodoroTime', 'setShortBreakTime', 'setLongBreakTime', 'setAutoStartPomodoro', 'setAutoStartBreak', 'setCycles']),
        openDialog() {
            this.resetForm();
            this.dialog = true;
        },
        resetForm() {
            this.pomodoroTimeTemporal = this.pomodoroTime;
            this.shortBreakTimeTemporal = this.shortBreakTime;
            this.longBreakTimeTemporal = this.longBreakTime;
            this.autoStartPomodoroTemporal = this.autoStartPomodoro;
            this.autoStartBreakTemporal = this.autoStartBreak;
            this.cyclesTemporal = this.cycles;
        },
        saveSettings() {
            this.setPomodoroTime(this.pomodoroTimeTemporal);
            this.setShortBreakTime(this.shortBreakTimeTemporal);
            this.setLongBreakTime(this.longBreakTimeTemporal);
            this.setAutoStartPomodoro(this.autoStartPomodoroTemporal);
            this.setAutoStartBreak(this.autoStartBreakTemporal);
            this.setCycles(this.cyclesTemporal);
            this.dialog = false;
        },
    },
    created() {
        this.resetForm();
    },
}
</script>