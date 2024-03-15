<template>
  <nav
    aria-label="main navigation"
    class="navbar is-success"
    role="navigation"
  >
    <div class="container is-max-desktop px-2">
      <div ref="navTitleRef" class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Noteballs
        </div>

        <a
          :class="{ 'is-active' : showMobileNav }"
          aria-expanded="false"
          aria-label="menu"
          class="navbar-burger"
          data-target="navbarBasicExample"
          role="button"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <button v-if="storeAuth.user.id" class="button is-primary" @click.prevent="logout">Log out
          {{ storeAuth.user.email }}
        </button>
      </div>

      <div
        id="navbarBasicExample"
        ref="navbarRef"
        :class="{ 'is-active' : showMobileNav }"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <RouterLink
            v-if="storeAuth.user.id"
            active-class="is-active"
            class="navbar-item"
            to="/"
            @click="showMobileNav = false"
          >
            Notes
          </RouterLink>
          <RouterLink
            v-if="storeAuth.user.id"
            active-class="is-active"
            class="navbar-item"
            to="/stats"
            @click="showMobileNav = false"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
  imports
*/

import {ref} from 'vue'
import {onClickOutside} from "@vueuse/core";
import {useStoreAuth} from "@/stores/storeAuth";

const storeAuth = useStoreAuth()

/*
  mobile nav
*/

const showMobileNav = ref(false)
const navbarRef = ref(null)
const navTitleRef = ref(null)

onClickOutside(navbarRef, event => showMobileNav.value = false, {ignore: [navTitleRef]})


const logout = () => {
  showMobileNav.value = false
  storeAuth.logOutUser()
}
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
