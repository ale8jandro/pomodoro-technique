<template>
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
                <v-btn rounded depressed v-on="on">Settings</v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="red">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="dialog = false">Save</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-list three-line subheader class="text-left">
                    <v-subheader>Set Custom Times (in minutes)</v-subheader>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field label="Pomodoro Time" :value="pomodoroTime"></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field label="Short Break" :value="shortBreakTime"></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field label="Long Break" :value="longBreakTime"></v-text-field>
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
    }),
    computed: {
        ...mapState(['pomodoroTime', 'shortBreakTime', 'longBreakTime']),
    },
    methods: {
        ...mapMutations(['setPomodoroTime', 'setShortBreakTime', 'setLongBreakTime']),
    },
}
</script>