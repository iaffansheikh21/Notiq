// "use client"

// import { create } from "zustand"
// import { persist } from "zustand/middleware"
// import type { Note, Comment } from "@/types"

// interface NoteState {
//   notes: Note[]
//   activeNoteId: string | null
//   trash: Note[]
//   user: {
//     name: string
//     avatar: string
//   }

//   // Actions
//   addNote: () => void
//   updateNote: (id: string, data: Partial<Note>) => void
//   deleteNote: (id: string) => void
//   restoreNote: (id: string) => void
//   permanentlyDeleteNote: (id: string) => void
//   setActiveNote: (id: string | null) => void
//   starNote: (id: string) => void
//   unstarNote: (id: string) => void
//   addComment: (noteId: string, content: string) => void
//   deleteComment: (noteId: string, commentId: string) => void
//   shareNote: (id: string) => void
//   unshareNote: (id: string) => void
// }

// export const useNoteStore = create<NoteState>()(
//   persist(
//     (set) => ({
//       notes: [
//         {
//           id: "default-note",
//           title: "Welcome to NOTIQ",
//           content: "Start writing your thoughts here...",
//           starred: false,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//           comments: [],
//           shared: false,
//         },
//       ],
//       activeNoteId: "default-note",
//       trash: [],
//       user: {
//         name: "User",
//         avatar: "U",
//       },

//       addNote: () => {
//         const newNote: Note = {
//           id: `note-${Date.now()}`,
//           title: "New page",
//           content: "",
//           starred: false,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//           comments: [],
//           shared: false,
//         }

//         set((state) => ({
//           notes: [...state.notes, newNote],
//           activeNoteId: newNote.id,
//         }))

//         return newNote.id
//       },

//       updateNote: (id, data) => {
//         set((state) => ({
//           notes: state.notes.map((note) => (note.id === id ? { ...note, ...data, updatedAt: new Date() } : note)),
//         }))
//       },

//       deleteNote: (id) => {
//         set((state) => {
//           const noteToDelete = state.notes.find((note) => note.id === id)
//           if (!noteToDelete) return state

//           return {
//             notes: state.notes.filter((note) => note.id !== id),
//             trash: [...state.trash, noteToDelete],
//             activeNoteId:
//               state.notes.length > 1 ? (state.notes[0].id === id ? state.notes[1].id : state.notes[0].id) : null,
//           }
//         })
//       },

//       restoreNote: (id) => {
//         set((state) => {
//           const noteToRestore = state.trash.find((note) => note.id === id)
//           if (!noteToRestore) return state

//           return {
//             trash: state.trash.filter((note) => note.id !== id),
//             notes: [...state.notes, noteToRestore],
//             activeNoteId: noteToRestore.id,
//           }
//         })
//       },

//       permanentlyDeleteNote: (id) => {
//         set((state) => ({
//           trash: state.trash.filter((note) => note.id !== id),
//         }))
//       },

//       setActiveNote: (id) => {
//         set({ activeNoteId: id })
//       },

//       starNote: (id) => {
//         set((state) => ({
//           notes: state.notes.map((note) => (note.id === id ? { ...note, starred: true } : note)),
//         }))
//       },

//       unstarNote: (id) => {
//         set((state) => ({
//           notes: state.notes.map((note) => (note.id === id ? { ...note, starred: false } : note)),
//         }))
//       },

//       addComment: (noteId, content) => {
//         const comment: Comment = {
//           id: `comment-${Date.now()}`,
//           content,
//           createdAt: new Date(),
//         }

//         set((state) => ({
//           notes: state.notes.map((note) =>
//             note.id === noteId
//               ? {
//                   ...note,
//                   comments: [...note.comments, comment],
//                   updatedAt: new Date(),
//                 }
//               : note,
//           ),
//         }))
//       },

//       deleteComment: (noteId, commentId) => {
//         set((state) => ({
//           notes: state.notes.map((note) =>
//             note.id === noteId
//               ? {
//                   ...note,
//                   comments: note.comments.filter((comment) => comment.id !== commentId),
//                 }
//               : note,
//           ),
//         }))
//       },

//       shareNote: (id) => {
//         set((state) => ({
//           notes: state.notes.map((note) => (note.id === id ? { ...note, shared: true } : note)),
//         }))
//       },

//       unshareNote: (id) => {
//         set((state) => ({
//           notes: state.notes.map((note) => (note.id === id ? { ...note, shared: false } : note)),
//         }))
//       },
//     }),
//     {
//       name: "notiq-storage",
//     },
//   ),
// )




"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Note, Comment } from "@/types"

interface NoteState {
  notes: Note[]
  activeNoteId: string | null
  trash: Note[]
  user: {
    name: string
    avatar: string
  }

  // Actions
  addNote: () => void
  updateNote: (id: string, data: Partial<Note>) => void
  deleteNote: (id: string) => void
  restoreNote: (id: string) => void
  permanentlyDeleteNote: (id: string) => void
  setActiveNote: (id: string | null) => void
  starNote: (id: string) => void
  unstarNote: (id: string) => void
  addComment: (noteId: string, content: string) => void
  deleteComment: (noteId: string, commentId: string) => void
  shareNote: (id: string) => void
  unshareNote: (id: string) => void
}

export const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      notes: [
        {
          id: "default-note",
          title: "Welcome to NOTIQ",
          content:
            "<h1>Getting Started with NOTIQ</h1><p>This is your first note. You can:</p><ul><li>Format text with the toolbar above</li><li>Create lists like this one</li><li>Add images and links</li><li>Create task lists</li></ul><p>Try it out!</p>",
          starred: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [],
          shared: false,
          isHtml: true,
        },
      ],
      activeNoteId: "default-note",
      trash: [],
      user: {
        name: "User",
        avatar: "U",
      },

      addNote: () => {
        const newNote: Note = {
          id: `note-${Date.now()}`,
          title: "New page",
          content: "",
          starred: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          comments: [],
          shared: false,
          isHtml: true,
        }

        set((state) => ({
          notes: [...state.notes, newNote],
          activeNoteId: newNote.id,
        }))

        return newNote.id
      },

      updateNote: (id, data) => {
        set((state) => ({
          notes: state.notes.map((note) => (note.id === id ? { ...note, ...data, updatedAt: new Date() } : note)),
        }))
      },

      deleteNote: (id) => {
        set((state) => {
          const noteToDelete = state.notes.find((note) => note.id === id)
          if (!noteToDelete) return state

          return {
            notes: state.notes.filter((note) => note.id !== id),
            trash: [...state.trash, noteToDelete],
            activeNoteId:
              state.notes.length > 1 ? (state.notes[0].id === id ? state.notes[1].id : state.notes[0].id) : null,
          }
        })
      },

      restoreNote: (id) => {
        set((state) => {
          const noteToRestore = state.trash.find((note) => note.id === id)
          if (!noteToRestore) return state

          return {
            trash: state.trash.filter((note) => note.id !== id),
            notes: [...state.notes, noteToRestore],
            activeNoteId: noteToRestore.id,
          }
        })
      },

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

      addComment: (noteId, content) => {
        const comment: Comment = {
          id: `comment-${Date.now()}`,
          content,
          createdAt: new Date(),
        }

        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === noteId
              ? {
                  ...note,
                  comments: [...note.comments, comment],
                  updatedAt: new Date(),
                }
              : note,
          ),
        }))
      },

      deleteComment: (noteId, commentId) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === noteId
              ? {
                  ...note,
                  comments: note.comments.filter((comment) => comment.id !== commentId),
                }
              : note,
          ),
        }))
      },

      shareNote: (id) => {
        set((state) => ({
          notes: state.notes.map((note) => (note.id === id ? { ...note, shared: true } : note)),
        }))
      },

      unshareNote: (id) => {
        set((state) => ({
          notes: state.notes.map((note) => (note.id === id ? { ...note, shared: false } : note)),
        }))
      },
    }),
    {
      name: "notiq-storage",
    },
  ),
)
