<template>
  <div class="edit-note">
    <AddEditNote
      ref="addEditNoteRef"
      v-model="noteContent"
      bgColor="link"
      label="Edit Note"
      placeholder="Edit note"
    >
      <template #buttons>
        <button
          class="button is-link is-light mr-2"
          @click="$router.back()"
        >
          Cancel
        </button>
        <button
          :disabled="!noteContent"
          class="button is-link has-background-link"
          @click="handleSaveClicked"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>

/*
  imports
*/

import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useStoreNotes} from '@/stores/storeNotes'

/*
  router
*/

const route = useRoute()
const router = useRouter()

/*
  store
*/

const storeNotes = useStoreNotes()

/*
  note
*/

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

/*
  save clicked
*/

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push('/')
}

</script>
