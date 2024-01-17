import {defineStore} from 'pinia'
import {db} from "@/js/firebase"
import {collection, deleteDoc, doc, onSnapshot, setDoc, updateDoc, query, orderBy} from "firebase/firestore";

const q = query(collection(db, "notes"), orderBy("id", "desc"));
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: []
    }
  },
  actions: {
    async getNotes() {
      try {
        // const data = await getDocs(collection(db, "notes"));
        // data.forEach((doc) => {
        //   this.notes.push({
        //     id: doc.id,
        //     content: doc.data().content
        //   })
        // });

        onSnapshot(q, (data) => {
          this.notes = []
          data.forEach((doc) => {
            this.notes.push({
              id: doc.id,
              content: doc.data().content
            })
          });
        })
      } catch (e) {
        console.error("Error fetching notes: ", e);
      }
    },
    async addNote(content) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString()

      await setDoc(doc(db, "notes", id), {
        id,
        content
      });
    },
    async deleteNote(idToDelete) {
      await deleteDoc(doc(db, "notes", idToDelete))
    },
    async updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content

      const noteRef = doc(db, "notes", id);

      await updateDoc(noteRef, {
        content
      });
    }
  },
  getters: {
    getNoteContent: (state) => (id) => state.notes.filter(note => note.id === id)[0].content,
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
    }
  }
})
