<template>
    <div>
        <v-btn 
            rounded
            depressed
            @click.stop="dialog = true">
            About Pomodoro Technique
        </v-btn>
        <v-dialog
            v-model="dialog"
            max-width="400px">
            <v-card>
                <v-card-title class="headline">Pomodoro Instructions</v-card-title>
                <v-card-text>
                    <v-list two-line subheader>
                        <v-list-item
                            v-for="item in items"
                            :key="item.title">
                            <v-list-item-avatar>
                                <v-icon :class="item.iconClass">{{ item.icon }}</v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content class="text-left">
                                <v-list-item-title class="bold">{{ item.title }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'PomodoroTechnique',
    data: () => ({
        dialog: false,
        items: [
            { icon: 'mdi-clipboard-list', iconClass: 'blue white--text', title: 'Step 1', subtitle: 'Decide on the task to be done.' },
            { icon: 'mdi-timer', iconClass: 'blue white--text', title: 'Step 2', subtitle: 'Set the timer to 25 minutes.' },
            { icon: 'mdi-progress-clock', iconClass: 'blue white--text', title: 'Step 3', subtitle: 'Work on the task until the timer rings.' },
            { icon: 'mdi-coffee', iconClass: 'blue white--text', title: 'Step 4', subtitle: 'Take a short 5 minutes break.' },
            { icon: 'mdi-food-apple', iconClass: 'amber white--text', title: 'Step 5', subtitle: 'Take a 15-30 minute break every 4 cycles.' },
        ],
    }),
}
</script>