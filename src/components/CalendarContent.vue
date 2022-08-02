<template>
  <div>
    <div class="calendar-content-head">
      <div>

        <span>{{ start.getHours() }}</span>
        <span v-if="start.getMinutes()">:{{ start.getMinutes() }}</span>

        <span> - </span>

        <span>{{ end.getHours() }}</span>
        <span v-if="end.getMinutes()">:{{ end.getMinutes() }}</span>

      </div>
      <div>{{ title }}</div>
    </div>
    <div>
      {{ fromLocation }} ---> {{ toLocation }}
    </div>
    <div>
      Dock {{dock}}
    </div>
    <div>{{ status }}</div>
  </div>
</template>

<script>
export default {
  name: "calendar-content",
  props: {
    start: {type: Date, required: true},
    end: {type: Date, required: true},
    title: {type: String, required: true,},
    fromLocation: {type: String, required: true},
    toLocation: {type: String, required: true},
    status: {type: String, required: true},
    dock: {type: String, required: true}
  }
}
</script>

<style scoped>
.calendar-content-head {
  display: flex;
  justify-content: space-between;
}
</style>