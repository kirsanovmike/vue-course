<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Number of Notes</td>
        <td>{{ storeNotes.totalNotesCount }}</td>
      </tr>
      <tr>
        <td>Number of Characters (of all notes)</td>
        <td>{{ storeNotes.totalCharactersCount }}</td>
      </tr>
      </tbody>
    </table>
    <input
      v-model="val"
      v-autofocus
      class="input"
      placeholder="Insert value"
      type="text"
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import {useStoreNotes} from '@/stores/storeNotes'
import {vAutofocus} from "@/directives/vAutofocus";
import {useWatchCaracters} from "@/use/useWatchCaracters";
import {ref} from "vue";

/*
  store
*/

const storeNotes = useStoreNotes()

let val = ref("")
useWatchCaracters(val, 20)
</script>
