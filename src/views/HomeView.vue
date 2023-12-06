<template>
  <div class="home">

    <h2>{{ mainTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button class="btn" @click="decreaseCounter(2)">--</button>
      <button class="btn" @click="decreaseCounter(1)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(1, $event)">+</button>
      <button class="btn" @click="increaseCounter(2)">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>
    <h1>
      {{ tmp }}
    </h1>

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

import {computed, onMounted, reactive, ref, watch} from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'

/*
  app title
*/

const mainTitle = "Super Calculator"

onMounted(() => {
  console.log("do some stuff on mounted hook")
})

/*
  counter
*/

const counterData = reactive({
  count: 0,
  title: "counterData_title"
})

watch(() => counterData.count, (newCount) => {
  tmpCom.value = newCount
  if (newCount === 20) {
    alert('Way to go! You made it to 20!!')
  }
})

let tmp = ref(0)

let tmpCom = computed({
  get() {
    return counterData.count * 3;
  },
  set(newValue) {
    tmp.value = newValue - 1
  }
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

const increaseCounter = (amount, e) => {
  counterData.count += amount
  console.log({e})
}

const decreaseCounter = amount => {
  counterData.count -= amount
}

onMounted(() => {
  console.log('Do stuff related to Counter')
})

</script>

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
