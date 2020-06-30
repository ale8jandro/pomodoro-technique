<template>
    <v-container>
        <v-row>
            <v-col>
                <v-img src="../../public/logo.png" width="200"></v-img>
            </v-col>
            <v-col>
                <CustomizeSettings />
            </v-col>
            <v-col>
                <PomodoroTechnique />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PomodoroTechnique from '@/components/PomodoroTechnique';
import CustomizeSettings from '@/components/CustomizeSettings';

export default {
    name: 'Header',
    components: {
        PomodoroTechnique,
        CustomizeSettings,
    },
}
</script>