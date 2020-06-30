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
                        <v-dialog v-model="dialogConfirm" persistent max-width="290">
                            <v-card>
                                <v-card-title class="headline">Warning</v-card-title>
                                <v-card-text>If you change the settings, the timer will be reset to the new parameters</v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="red darken-1" text @click="dialogConfirm = false">Cancel</v-btn>
                                    <v-btn color="green darken-1" text @click="acceptDialogConfirm">Accept</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
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
                    <v-list-item>
                        <v-list-item-action>
                            <v-checkbox v-model="reproduceAudioTemporal"></v-checkbox>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Reproduce Audio</v-list-item-title>
                            <v-list-item-subtitle>Reproduce a ring when the time is over.</v-list-item-subtitle>
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
        dialogConfirm: false,
        autoStartPomodoroTemporal: true,
        autoStartBreakTemporal: true,
        pomodoroTimeTemporal: 25,
        shortBreakTimeTemporal: 5,
        longBreakTimeTemporal: 15,
        reproduceAudioTemporal: true,
        cyclesTemporal: 4,
    }),
    computed: {
        ...mapState(['pomodoroTime', 'shortBreakTime', 'longBreakTime', 'autoStartPomodoro', 'autoStartBreak', 'reproduceAudio', 'cycles']),
    },
    methods: {
        ...mapMutations(['setPomodoroTime', 'setShortBreakTime', 'setLongBreakTime', 'setAutoStartPomodoro', 'setAutoStartBreak', 'setReproduceAudio', 'setCycles']),
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
            this.reproduceAudioTemporal = this.reproduceAudio;
            this.cyclesTemporal = this.cycles;
        },
        saveSettings() {
            this.dialogConfirm = true;
        },
        acceptDialogConfirm() {
            this.dialogConfirm = false;
            this.setPomodoroTime(this.pomodoroTimeTemporal);
            this.setShortBreakTime(this.shortBreakTimeTemporal);
            this.setLongBreakTime(this.longBreakTimeTemporal);
            this.setAutoStartPomodoro(this.autoStartPomodoroTemporal);
            this.setAutoStartBreak(this.autoStartBreakTemporal);
            this.setReproduceAudio(this.reproduceAudioTemporal);
            this.setCycles(this.cyclesTemporal);
            this.$eventBus.$emit('resetTimer');
            this.dialog = false;
        },
    },
    created() {
        this.resetForm();
    },
}
</script>