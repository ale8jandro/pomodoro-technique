<template>
    <v-stepper class="no-box-shadow" v-model="breaksNumber">
        <v-stepper-header>
            <template v-for="cycle in cycles">
                <v-stepper-step 
                    :key="`${cycle}-step`"
                    :step="cycle"
                    :complete="breaksNumber > cycle"
                    >
                    Step {{ cycle }}
                </v-stepper-step>
                <v-divider
                    v-if="cycle !== cycles"
                    :key="`${cycle}-divider`"
                ></v-divider>
            </template>
        </v-stepper-header>
    </v-stepper>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Steppers',
    computed: {
        ...mapState(['breaksNumber', 'cycles']),
    },
}
</script>

<style>
    .no-box-shadow {
        box-shadow: none !important;
    }
</style>