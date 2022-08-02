<template>
  <full-calendar :options="calendarOptions">
    <template #eventContent="data">
      <calendar-content
          :start="data.event.start"
          :end="data.event.end"
          :title="data.event.title"
          :from-location="data.event.extendedProps.fromLocation"
          :to-location="data.event.extendedProps.toLocation"
          :status="data.event.extendedProps.status"
          :dock="data.event.extendedProps.dock"
      />
    </template>
  </full-calendar>
</template>

<script lang="ts">

import {computed, defineComponent, onBeforeMount, PropType, ref} from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {CalendarOptions} from "@fullcalendar/core";
import CalendarContent from "@/components/CalendarContent.vue";

export interface EventDate {
  title: string;
  start: Date;
  end: Date;
  editable: boolean;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  extendedProps: {
    dock: string;
    fromLocation: string;
    toLocation: string;
    status: string;
  }
}

export default defineComponent({
  name: "interactive-calendar",
  props: {modelValue: {type: Array as PropType<Array<EventDate>>, default: () => []}},
  components: {CalendarContent, FullCalendar},
  emits: ['update:modelValue'],
  setup(props, context) {
    const show = ref<boolean>(false)

    onBeforeMount(async () => {
      show.value = true
    })

    const calendarOptions = computed((): CalendarOptions => {
      return {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'timeGridWeek',
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'timeGridDay,timeGridWeek'
        },
        dateClick: handleDateClick,
        height: '1000px',
        editable: true,
        slotMinTime: '07:00:00',
        slotMaxTime: '17:00:00',
        events: props.modelValue,
        expandRows: true,
        eventDrop: handleEventDragComplete,
        //eventContent: null,
      }
    })

    function handleDateClick(arg: unknown) {
      console.log(arg)
    }

    function handleEventDragComplete(arg: unknown) {
      console.log(arg)
      context.emit('update:modelValue')
    }

    return {
      calendarOptions
    }

  }
})

</script>

<style scoped>

</style>
