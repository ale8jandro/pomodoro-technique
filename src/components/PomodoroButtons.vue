<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn rounded depressed>Pomodoro</v-btn>
            </v-col>
            <v-col>
                <v-btn rounded depressed>Short Break</v-btn>
            </v-col>
            <v-col>
                <v-btn rounded depressed>Long Break</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'PomodoroButtons',
}
</script>