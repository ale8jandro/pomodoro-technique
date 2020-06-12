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
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader class="text-left">
                    <v-subheader>General</v-subheader>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="autoStartPomodoro"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Auto Start Pomodoro</v-list-item-title>
                            <v-list-item-subtitle>Auto start the Pomodoro Time without interaction of the user.</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="autoStartBreak"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Auto Start Breaks</v-list-item-title>
                            <v-list-item-subtitle>Auto start the breaks without interaction of the user.</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="oneMinuteNotification"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>One minute notification</v-list-item-title>
                            <v-list-item-subtitle>Show a notification when one minute is left from the Pomodoro.</v-list-item-subtitle>
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
        autoStartPomodoro: false,
        autoStartBreak: true,
        oneMinuteNotification: false,
        pomodoroTimeTemporal: 25,
        shortBreakTimeTemporal: 5,
        longBreakTimeTemporal: 15,
    }),
    computed: {
        ...mapState(['pomodoroTime', 'shortBreakTime', 'longBreakTime']),
    },
    methods: {
        ...mapMutations(['setPomodoroTime', 'setShortBreakTime', 'setLongBreakTime']),
        openDialog() {
            this.resetForm();
            this.dialog = true;
        },
        resetForm() {
            this.pomodoroTimeTemporal = this.pomodoroTime;
            this.shortBreakTimeTemporal = this.shortBreakTime;
            this.longBreakTimeTemporal = this.longBreakTime;
        },
        saveSettings() {
            this.setPomodoroTime(this.pomodoroTimeTemporal);
            this.setShortBreakTime(this.shortBreakTimeTemporal);
            this.setLongBreakTime(this.longBreakTimeTemporal);
            this.dialog = false;
        },
    },
    created() {
        this.pomodoroTimeTemporal = this.pomodoroTime;
        this.shortBreakTimeTemporal = this.shortBreakTime;
        this.longBreakTimeTemporal = this.longBreakTime;
    },
}
</script>