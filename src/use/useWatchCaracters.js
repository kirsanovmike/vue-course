import {watch} from "vue";

export function useWatchCaracters(val, count) {
  watch(val, (newValue) => {
      if (newValue.length > count) {
        alert(`Max only ${count} length note!!!`)
      }
    },
    {
      immediate: true
    })
}
