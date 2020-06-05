<template>
<div>
    <v-progress-linear
      v-model="power"
      height="25"
      reactive
    ></v-progress-linear>
</div>
</template>

<script>
export default {
    name: 'Timer',
    data: () => ({
        power: 5,
    }),
}
</script>