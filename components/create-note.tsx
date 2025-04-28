
"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Moon,
  Sun,
  Home,
  Inbox,
  Settings,
  Trash,
  Trash2,
  Users,
  Plus,
  Share,
  Star,
  MessageSquare,
  Menu,
  ImageIcon,
  FileText,
  Search,
  ChevronDown,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useNoteStore } from "@/lib/store"
import { CommentDialog } from "@/components/createnote/comment-dialog"
import { ShareDialog } from "@/components/createnote/share-dialog"
import { SettingsDialog } from "@/components/createnote/settings-dialog"
import { TrashDialog } from "@/components/createnote/trash-dialog"
import { formatDistanceToNow } from "date-fns"

export default function CreateNote() {
  // State
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Dialog states
  const [commentDialogOpen, setCommentDialogOpen] = useState(false)
  const [shareDialogOpen, setShareDialogOpen] = useState(false)
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false)
  const [trashDialogOpen, setTrashDialogOpen] = useState(false)

  // Theme
  const { theme, setTheme } = useTheme()

  // Note store
  const { notes, trash, activeNoteId, addNote, updateNote, deleteNote, setActiveNote, starNote, unstarNote } =
    useNoteStore()

  // Get active note
  const activeNote = notes.find((note) => note.id === activeNoteId) || {
    id: "",
    title: "",
    content: "",
    starred: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    comments: [],
    shared: false,
  }

  // Refs for auto-resizing textareas
  const titleRef = useRef<HTMLTextAreaElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  // Auto-resize textarea
  const autoResize = (element: HTMLTextAreaElement | null) => {
    if (!element) return
    element.style.height = "auto"
    element.style.height = `${element.scrollHeight}px`
  }

  // Auto-resize effect for title
  useEffect(() => {
    if (titleRef.current) autoResize(titleRef.current)
  }, [activeNote.title])

  // Auto-resize effect for content
  useEffect(() => {
    if (contentRef.current) autoResize(contentRef.current)
  }, [activeNote.content])

  // Handle title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!activeNoteId) return
    updateNote(activeNoteId, { title: e.target.value })
    autoResize(e.target)
  }

  // Handle content change
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!activeNoteId) return
    updateNote(activeNoteId, { content: e.target.value })
    autoResize(e.target)
  }

  // Handle save
  const handleSave = () => {
    if (!activeNoteId) return
    alert("Note Saved ✅")
  }

  // Handle star toggle
  const handleStarToggle = () => {
    if (!activeNoteId) return
    if (activeNote.starred) {
      unstarNote(activeNoteId)
    } else {
      starNote(activeNoteId)
    }
  }

  // Filter notes for search
  const filteredNotes = searchQuery
    ? notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : notes

  // Get starred notes
  const starredNotes = notes.filter((note) => note.starred)

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Sidebar */}
      <motion.div
        className={cn(
          "h-full border-r border-border bg-muted/30 transition-all duration-300",
          isSidebarOpen ? "w-60" : "w-0",
        )}
        initial={{ width: "15rem" }}
        animate={{ width: isSidebarOpen ? "15rem" : "0rem" }}
      >
        {isSidebarOpen && (
          <div className="flex h-full flex-col">
            {/* User info */}
            <div className="flex items-center gap-2 p-4 border-b border-border">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                {useNoteStore.getState().user.avatar}
              </div>
              <span className="font-medium">NOTIQ</span>
            </div>

            {/* Search */}
            <div className="p-2">
              <div
                className="flex items-center gap-2 rounded-md border border-border bg-background p-2 cursor-pointer"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search...</span>
              </div>
              {isSearchOpen && (
                <div className="absolute inset-0 z-50 flex items-start justify-center pt-24 bg-background/80 backdrop-blur-sm">
                  <div className="w-full max-w-lg bg-background border border-border rounded-lg shadow-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Search size={16} className="text-muted-foreground" />
                      <Input
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1"
                        autoFocus
                      />
                      <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                    <div className="max-h-[60vh] overflow-y-auto">
                      {filteredNotes.length > 0 ? (
                        filteredNotes.map((note) => (
                          <div
                            key={note.id}
                            className="p-2 hover:bg-accent rounded-md cursor-pointer"
                            onClick={() => {
                              setActiveNote(note.id)
                              setIsSearchOpen(false)
                              setSearchQuery("")
                            }}
                          >
                            <p className="font-medium">{note.title}</p>
                            <p className="text-sm text-muted-foreground truncate">{note.content}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-muted-foreground py-4">No results found</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-2">
              <div className="space-y-1">
                <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent">
                  <Home size={16} />
                  <span>Home</span>
                </button>
                <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent">
                  <Inbox size={16} />
                  <span>Inbox</span>
                </button>
              </div>

              {/* Private section */}
              <div className="mt-6">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-xs font-medium text-muted-foreground">Private</span>
                  <ChevronDown size={14} className="text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm group",
                        activeNoteId === note.id ? "bg-accent" : "hover:bg-accent",
                      )}
                    >
                      <button
                        className="flex-1 flex items-center gap-2 text-left"
                        onClick={() => setActiveNote(note.id)}
                      >
                        <FileText size={16} />
                        <span className="truncate">{note.title}</span>
                        {note.starred && <Star size={14} className="ml-auto text-yellow-500" />}
                      </button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation()
                          deleteNote(note.id)
                        }}
                      >
                        <Trash2 size={14} className="text-muted-foreground hover:text-destructive" />
                        <span className="sr-only">Move to trash</span>
                      </Button>
                    </div>
                  ))}
                  <button
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                    onClick={() => addNote()}
                  >
                    <Plus size={16} />
                    <span>Add new</span>
                  </button>
                </div>
              </div>

              {/* Shared section */}
              <div className="mt-6">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-xs font-medium text-muted-foreground">Shared</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md border border-dashed border-border p-4 m-2">
                  <Users size={20} className="text-muted-foreground mb-2" />
                  <p className="text-xs text-center text-muted-foreground">Pages that you share will go here</p>
                  <Button variant="outline" size="sm" className="mt-2 text-xs">
                    Start collaborating
                  </Button>
                </div>
              </div>
            </nav>

            {/* Bottom actions */}
            <div className="border-t border-border p-2">
              <button
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setSettingsDialogOpen(true)}
              >
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <button
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent"
                onClick={() => setTrashDialogOpen(true)}
              >
                <Trash size={16} />
                <span>Trash</span>
                {trash.length > 0 && (
                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-muted px-1.5 text-xs font-medium">
                    {trash.length}
                  </span>
                )}
              </button>
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent">
                <Users size={16} />
                <span>Invite members</span>
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border p-2">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mr-2">
              <Menu size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {activeNote.updatedAt && formatDistanceToNow(new Date(activeNote.updatedAt), { addSuffix: true })}
            </span>
            <Button variant="outline" size="sm" className="gap-1" onClick={() => setShareDialogOpen(true)}>
              <Share size={14} />
              Share
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setCommentDialogOpen(true)}>
              <MessageSquare size={18} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleStarToggle}>
              <Star size={18} className={activeNote.starred ? "fill-yellow-500 text-yellow-500" : ""} />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>

        {/* Note content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          <div className="mx-auto max-w-3xl">
            {/* Note actions */}
            <div className="mb-6 flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <ImageIcon size={14} />
                Add cover
              </Button>
              <Button variant="outline" size="sm" className="gap-1" onClick={() => setCommentDialogOpen(true)}>
                <MessageSquare size={14} />
                Add comment
              </Button>
            </div>

            {/* Title */}
            <Textarea
              ref={titleRef}
              value={activeNote.title}
              onChange={handleTitleChange}
              className="w-full resize-none overflow-hidden border-none bg-transparent p-0 text-4xl font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Untitled"
            />

            {/* Content */}
            <Textarea
              ref={contentRef}
              value={activeNote.content}
              onChange={handleContentChange}
              className="mt-4 w-full resize-none overflow-hidden border-none bg-transparent p-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Start writing here..."
              rows={1}
            />
          </div>
        </div>

        {/* Floating save button */}
        <div className="fixed bottom-6 right-6">
          <Button onClick={handleSave} size="lg" className="shadow-lg">
            Save Note
          </Button>
        </div>
      </div>

      {/* Dialogs */}
      <CommentDialog open={commentDialogOpen} onOpenChange={setCommentDialogOpen} />
      <ShareDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
      <SettingsDialog open={settingsDialogOpen} onOpenChange={setSettingsDialogOpen} />
      <TrashDialog open={trashDialogOpen} onOpenChange={setTrashDialogOpen} />
    </div>
  )
}
