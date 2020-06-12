<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn icon>
                    <v-icon size="80" color="red" @click="playClick">{{ iconPlay }}</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn icon>
                    <v-icon size="80" color="red" @click="stopClick">mdi-stop-circle</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn icon>
                    <v-icon size="80" color="red" @click="refreshClick">mdi-refresh-circle</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

const icons = {
    play: 'mdi-play-circle',
    pause: 'mdi-pause-circle',
};
let intervalFunction;

export default {
    name: 'TimerButtons',
    data: () => ({
        iconPlay: 'mdi-play-circle',
    }),
    computed: {
        ...mapState('timer', ['minutes', 'seconds']),
    },
    methods: {
        ...mapMutations('timer', ['decrementSecond', 'startCounting', 'resetTimer']),
        playClick() {
            if (this.iconPlay === icons.play) {
                this.iconPlay = icons.pause;
                this.startCounting();
                intervalFunction = setInterval(this.decrementSecond, 1000);
            } else {
                this.iconPlay = icons.play;
                clearInterval(intervalFunction);
            }
        },
        stopClick() {
            this.iconPlay = icons.play;
        },
        refreshClick() {
            this.resetTimer();
        },
    },
}
</script>