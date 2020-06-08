<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn icon>
                    <v-icon>mdi-play-circle</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn icon>
                    <v-icon>mdi-stop-circle</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn icon>
                    <v-icon>mdi-refresh-circle</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'TimerButtons',
}
</script>