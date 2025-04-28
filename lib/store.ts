import { create } from "zustand"
import { persist } from "zustand/middleware"

// Define types for our notes
interface Note {
  id: string
  title: string
  content: string
  starred: boolean
  createdAt: Date
  updatedAt: Date
  comments: Comment[]
  shared: boolean
}

interface Comment {
  id: string
  text: string
  createdAt: Date
  author: string
}

interface User {
  name: string
  avatar: string
}

// Define the store state
interface NoteState {
  notes: Note[]
  trash: Note[] // Added trash array
  activeNoteId: string | null
  user: User
  addNote: () => void
  updateNote: (id: string, updates: Partial<Note>) => void
  deleteNote: (id: string) => void
  restoreNote: (id: string) => void // Added restore function
  permanentlyDeleteNote: (id: string) => void // Added permanent delete function
  setActiveNote: (id: string) => void
  starNote: (id: string) => void
  unstarNote: (id: string) => void
}

// Create the store with persistence
export const useNoteStore = create<NoteState>()(
  persist(
    (set, get) => ({
      // Initial state
      notes: [
        {
          id: "1",
          title: "Welcome to NOTIQ",
          content: "This is your first note. Start writing to see the magic happen!",
          starred: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [],
          shared: false,
        },
      ],
      trash: [], // Initialize empty trash
      activeNoteId: "1",
      user: {
        name: "User",
        avatar: "U",
      },

      // Actions
      addNote: () => {
        const newNote = {
          id: Date.now().toString(),
          title: "Untitled",
          content: "",
          starred: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [],
          shared: false,
        }

        set((state) => ({
          notes: [newNote, ...state.notes],
          activeNoteId: newNote.id,
        }))
      },

      updateNote: (id, updates) => {
        set((state) => ({
          notes: state.notes.map((note) => (note.id === id ? { ...note, ...updates, updatedAt: new Date() } : note)),
        }))
      },

      // Modified to move to trash instead of permanent deletion
      deleteNote: (id) => {
        set((state) => {
          const noteToDelete = state.notes.find((note) => note.id === id)
          if (!noteToDelete) return state

          return {
            notes: state.notes.filter((note) => note.id !== id),
            trash: [noteToDelete, ...state.trash],
            activeNoteId:
              state.notes[0]?.id !== id ? state.activeNoteId : state.notes[1]?.id || state.notes[0]?.id || null,
          }
        })
      },

      // New function to restore from trash
      restoreNote: (id) => {
        set((state) => {
          const noteToRestore = state.trash.find((note) => note.id === id)
          if (!noteToRestore) return state

          return {
            trash: state.trash.filter((note) => note.id !== id),
            notes: [noteToRestore, ...state.notes],
          }
        })
      },

      // New function to permanently delete from trash
      permanentlyDeleteNote: (id) => {
        set((state) => ({
          trash: state.trash.filter((note) => note.id !== id),
        }))
      },

      setActiveNote: (id) => {
        set({ activeNoteId: id })
      },

      starNote: (id) => {
        set((state) => ({
          notes: state.notes.map((note) => (note.id === id ? { ...note, starred: true } : note)),
        }))
      },

      unstarNote: (id) => {
        set((state) => ({
          notes: state.notes.map((note) => (note.id === id ? { ...note, starred: false } : note)),
        }))
      },
    }),
    {
      name: "notiq-storage", // Name for the localStorage key
    },
  ),
)

