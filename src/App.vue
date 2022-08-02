<template>
  <interactive-calendar :model-value="data"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import InteractiveCalendar from "@/components/InteractiveCalendar.vue";
import {generateTestData} from "@/data";

export default defineComponent({
  name: 'App',
  components: {
    InteractiveCalendar,
  },
  setup() {

    const data = generateTestData(1200, 120);

    return {
      data,
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
