"use client"

import { DialogClose } from "@/components/ui/dialog"
import { useNoteStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { formatDistanceToNow } from "date-fns"
import { Trash2, RotateCcw } from "lucide-react"

interface TrashDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TrashDialog({ open, onOpenChange }: TrashDialogProps) {
  const { trash, restoreNote, permanentlyDeleteNote } = useNoteStore()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Trash</DialogTitle>
          <DialogDescription>
            Deleted notes are stored here for 30 days before being permanently removed.
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[300px] overflow-y-auto space-y-2 my-4">
          {trash.length > 0 ? (
            trash.map((note) => (
              <div key={note.id} className="flex items-center justify-between p-2 border rounded-md">
                <div>
                  <p className="font-medium">{note.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Deleted {formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => restoreNote(note.id)}>
                    <RotateCcw className="h-4 w-4" />
                    <span className="sr-only">Restore</span>
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => permanentlyDeleteNote(note.id)}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete permanently</span>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-muted-foreground">Trash is empty</div>
          )}
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

