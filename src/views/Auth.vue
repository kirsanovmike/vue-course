<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{'is-active': isLogin}" @click.prevent="isLogin = true"><a>Login</a></li>
        <li :class="{'is-active': !isLogin}" @click.prevent="isLogin = false"><a>Register</a></li>
      </ul>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h2>
            {{ !isLogin ? "Register" : "Login" }}
          </h2>
          <form @submit.prevent="onSubmit">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="credentials.email" class="input" placeholder="e.g. alexsmith@gmail.com" type="email">
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="credentials.password" class="input" placeholder="..." type="password">
              </div>
            </div>
            <button class="button is-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useStoreAuth} from "@/stores/storeAuth";

const isLogin = ref(true)

const storeAuth = useStoreAuth()

const credentials = reactive({
  email: "",
  password: ""
})

const onSubmit = () => {
  if (!credentials.password || !credentials.email) {
    alert("Fill the field!s")
  } else {
    if (isLogin.value) {
      storeAuth.logInUser(credentials)
    } else {
      storeAuth.registerUser(credentials)
    }
  }
}
</script>

<style scoped>

</style>
