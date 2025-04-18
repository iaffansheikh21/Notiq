

"use client"

import { DialogClose } from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import { useNoteStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Copy, Check } from "lucide-react"

interface ShareDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ShareDialog({ open, onOpenChange }: ShareDialogProps) {
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState("")
  const [shareUrl, setShareUrl] = useState("")
  const { activeNoteId, notes, shareNote, unshareNote } = useNoteStore()

  const activeNote = notes.find((note) => note.id === activeNoteId)

  useEffect(() => {
    if (activeNoteId && typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/share/${activeNoteId}`)
    }
  }, [activeNoteId])

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleToggleShare = () => {
    if (!activeNoteId) return
    activeNote?.shared ? unshareNote(activeNoteId) : shareNote(activeNoteId)
  }

  const handleInvite = () => {
    if (!email.trim()) return
    alert(`Invitation sent to ${email}`)
    setEmail("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Note</DialogTitle>
          <DialogDescription>Share this note with others or make it private again.</DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2 pt-4">
          <div className="grid flex-1 gap-2">
            <Input value={shareUrl} readOnly disabled={!activeNote?.shared} />
          </div>
          <Button type="button" size="icon" onClick={handleCopy} disabled={!activeNote?.shared}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy</span>
          </Button>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <Button onClick={handleToggleShare} variant={activeNote?.shared ? "destructive" : "default"}>
            {activeNote?.shared ? "Make Private" : "Make Public"}
          </Button>

          {activeNote?.shared && (
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium mb-2">Invite people</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleInvite}>Invite</Button>
              </div>
            </div>
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
