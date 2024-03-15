import {defineStore} from 'pinia'
import {auth} from "@/js/firebase"
import {createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {useStoreNotes} from "@/stores/storeNotes";

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {}
    }
  },
  getters: {
    getUserId: state => state?.user?.id
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        const storeNotes = useStoreNotes()
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email
          this.router.push("/")
          storeNotes.init()

        } else {
          this.user = {}
          this.router.replace("/auth")
          storeNotes.clearNotes()
        }
      });
    },
    registerUser({email, password}) {
      createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          console.error(error)
        });
    },
    logInUser({email, password}) {
      signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          console.error(error)

        });
    },
    logOutUser() {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.error(error)
      });
    }
  },
})
