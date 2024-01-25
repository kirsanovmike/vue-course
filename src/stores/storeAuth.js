import {defineStore} from 'pinia'
import {auth} from "@/js/firebase"
import {createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {}
    }
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email
          this.router.push("/")
        } else {
          this.user = {}
          this.router.replace("/auth")
        }
      });
    },
    registerUser({email, password}) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          console.error(error)
        });
    },
    logInUser({email, password}) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          console.error(error)

        });
    },
    logOutUser() {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  },
})
