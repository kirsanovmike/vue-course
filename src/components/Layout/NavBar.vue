<template>
  <nav
    aria-label="main navigation"
    class="navbar is-success"
    role="navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
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
      </div>

      <div
        id="navbarBasicExample"
        :class="{ 'is-active' : showMobileNav }"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <RouterLink
            active-class="is-active"
            class="navbar-item"
            to="/vue-course/"
            @click="showMobileNav = false"
          >
            Notes
          </RouterLink>
          <RouterLink
            active-class="is-active"
            class="navbar-item"
            to="/vue-course/stats"
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

/*
  mobile nav
*/

const showMobileNav = ref(false)

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
