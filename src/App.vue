<template>
  <v-app>
    <Header />
    <PomodoroButtons />
    <Timer />
    <TimerButtons />
    <Breaks />
    <Shortcuts />
    <TodoList />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import PomodoroButtons from '@/components/PomodoroButtons';
import Timer from '@/components/Timer';
import TimerButtons from '@/components/TimerButtons';
import Breaks from '@/components/Breaks';
import Shortcuts from '@/components/Shortcuts';
import TodoList from '@/components/TodoList';

export default {
  name: 'App',
  components: {
    Header,
    PomodoroButtons,
    Timer,
    TimerButtons,
    Breaks,
    Shortcuts,
    TodoList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
