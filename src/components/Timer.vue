<template>
    <div>
        <v-progress-linear
            :value="percentage"
            height="150"
            reactive>
            <strong class="display-4">{{ `${minutesFormatted}:${secondsFormatted}` }}</strong>
            </v-progress-linear>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Timer',
    computed: {
        ...mapState('timer', ['minutes', 'seconds', 'percentage']),
        minutesFormatted() {
            if (this.minutes < 10) {
                return `0${this.minutes}`;
            }
            return this.minutes;
        },
        secondsFormatted() {
            if (this.seconds < 10) {
                return `0${this.seconds}`;
            }
            return this.seconds;
        },
    },
}
</script>