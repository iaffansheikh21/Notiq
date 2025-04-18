"use client"

import { DialogClose } from "@/components/ui/dialog"

import { useState } from "react"
import { useNoteStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { formatDistanceToNow } from "date-fns"

interface CommentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommentDialog({ open, onOpenChange }: CommentDialogProps) {
  const [newComment, setNewComment] = useState("")
  const { activeNoteId, notes, addComment, deleteComment } = useNoteStore()

  const activeNote = notes.find((note) => note.id === activeNoteId)

  const handleAddComment = () => {
    if (!activeNoteId || !newComment.trim()) return

    addComment(activeNoteId, newComment)
    setNewComment("")
  }

  const handleDeleteComment = (commentId: string) => {
    if (!activeNoteId) return
    deleteComment(activeNoteId, commentId)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
          <DialogDescription>Add comments to collaborate on this note.</DialogDescription>
        </DialogHeader>

        <div className="max-h-[300px] overflow-y-auto space-y-4 my-4">
          {activeNote?.comments && activeNote.comments.length > 0 ? (
            activeNote.comments.map((comment) => (
              <div key={comment.id} className="bg-muted p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground">
                      {useNoteStore.getState().user.avatar}
                    </div>
                    <span className="text-sm font-medium">{useNoteStore.getState().user.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      <span className="sr-only">Delete comment</span>×
                    </Button>
                  </div>
                </div>
                <p className="mt-2 text-sm">{comment.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-muted-foreground">No comments yet</div>
          )}
        </div>

        <div className="flex items-end gap-2">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1"
          />
          <Button onClick={handleAddComment}>Add</Button>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
