<template>
  <div
      :class="`has-background-${ bgColor }-dark`"
      class="card p-4 mb-5"
  >
    <label
        v-if="label"
        class="label has-text-white"
    >
      {{ label }}
    </label>

    <div class="field">
      <div class="control">
        <textarea
            v-autofocus
            :placeholder="placeholder"
            :value="props.modelValue"
            class="textarea"
            @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"/>
      </div>
    </div>
  </div>
</template>

<script setup>

/*
  imports
*/

import {vAutofocus} from "@/directives/vAutofocus";

/*
  props
*/

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something...'
  },
  label: {
    type: String
  }
})

/*
  emits
*/

const emit = defineEmits(['update:modelValue'])

</script>
