<template>
  <div class="home">

    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter(2)">--</button>
      <button class="btn" @click="decreaseCounter(1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(1, $event)">+</button>
      <button class="btn" @click="increaseCounter(2)">++
      </button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" v-autofocus type="text">
    </div>

  </div>
</template>

<script setup>
/*
  imports
*/

import {computed, nextTick, onMounted, reactive, ref, watch} from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'

/*
  app title
*/

const appTitle = 'My Ok Counter App'

const appTitleRef = ref(null)

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`)
})

/*
  counter
*/

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(() => counterData.count, (newCount) => {
    if (newCount === 20) {
      alert('Way to go! You made it to 20!!')
    }
  },
  {
    immediate: true
  })

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

const increaseCounter = async (amount, e) => {
  counterData.count += amount
  await nextTick()
  console.log('do something when counter has updated in the dom')
}

const decreaseCounter = amount => {
  counterData.count -= amount
}

onMounted(() => {
  console.log('Do stuff related to Counter')
})

</script>

<!--
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return 'my result'
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert('asdfasd')
    }
  },
  mounted() {
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted')
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
