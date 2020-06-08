<template>
    <div>
        <v-btn 
            rounded
            depressed
            @click.stop="dialog = true">
            Customize
        </v-btn>
        <v-dialog
            v-model="dialog"
            max-width="400px">
            <v-card>
                <v-card-title>Settings</v-card-title>
                <v-card-text>
                    Set custom Times (in minutes)
                    Pomodoro: 25  
                    Short Break
                    Long Break
                    Auto Start pomodoros
                    Auto start breaks
                    Notify when one minute is left
                    Select sound
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="green darken-1" text @click="closeAndSave">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Customize',
    data: () => ({
        dialog: false,
    }),
    methods: {
        closeAndSave() {
            this.dialog = false;
        },
    },
}
</script>