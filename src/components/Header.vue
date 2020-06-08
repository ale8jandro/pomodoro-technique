<template>
    <v-container>
        <v-row>
            <v-col>
                <div>Pomodoro Technique</div>
            </v-col>
            <v-col>
                <Customize />
            </v-col>
            <v-col>
                <PomodoroTechnique />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PomodoroTechnique from '@/components/PomodoroTechnique';
import Customize from '@/components/Customize';

export default {
    name: 'Header',
    components: {
        PomodoroTechnique,
        Customize,
    },
}
</script>