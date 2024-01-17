<template>
  <div
    class="card mb-4"
  >
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-left has-text-grey-light mt-2">
          <small>{{ formatDate(note.id) }}</small>
        </div>
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="`/vue-course/editNote/${ note.id }`"
        class="card-footer-item"
        href="#"
      >
        Edit
      </RouterLink>
      <a
        class="card-footer-item"
        href="#"
        @click.prevent="storeNotes.deleteNote(note.id)"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
/*
  imports
*/

import {computed} from 'vue'
import {useStoreNotes} from '@/stores/storeNotes'
import {useDateFormat} from "@vueuse/core";

/*
  props
*/

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  character length
*/

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

/* format date */

const formatDate = (dateInMs) => useDateFormat(new Date(+dateInMs), "DD.MM.YYYY HH:mm:ss").value

</script>
