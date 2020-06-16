<template>
    <v-progress-linear
      :value="percentage"
      color="red lighten-2"
      buffer-value="0"
      stream
      height="50"
    >{{ breaksNumber }} of {{ cycles }} cycles</v-progress-linear>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Breaks',
    computed: {
        ...mapState(['breaksNumber', 'cycles']),
        percentage() {
            return (this.breaksNumber/this.cycles) * 100;
        },
    },
}
</script>