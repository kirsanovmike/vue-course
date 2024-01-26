<template>
  <div class="notes">

    <AddEditNote
        ref="addEditNoteRef"
        v-model="newNote"
        placeholder="Add a new note"
        @keydown.enter.exact.prevent="addNote"
    >
      <template #buttons>
        <button
            :disabled="newNote === ''"
            class="button is-link has-background-success"
            @click="addNote"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
    />

  </div>
</template>

<script setup>

/*
  imports
*/

import {onMounted, ref} from 'vue'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import {useStoreNotes} from '@/stores/storeNotes'
import {useWatchCaracters} from "@/use/useWatchCaracters";

/*
  store
*/

const storeNotes = useStoreNotes()

onMounted(async () => {
  await storeNotes.getNotes()
})

/*
  notes
*/

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  if (newNote.value !== '' && newNote.value != null) {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
  }
}

useWatchCaracters(newNote, 30)
</script>
