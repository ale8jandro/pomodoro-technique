<template>
  <v-app>
    <Header />
    <PomodoroButtons />
    <Timer />
    <TimerButtons />
    <Steppers />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import PomodoroButtons from '@/components/PomodoroButtons';
import Timer from '@/components/Timer';
import TimerButtons from '@/components/TimerButtons';
import Steppers from '@/components/Steppers';

export default {
  name: 'App',
  components: {
    Header,
    PomodoroButtons,
    Timer,
    TimerButtons,
    Steppers,
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #502c2c;
    padding-top: 40px;
    background: rgba(255, 0, 0, 0.3);
  }
</style>
