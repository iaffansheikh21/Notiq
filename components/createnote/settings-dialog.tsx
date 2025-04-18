"use client"

import { useState } from "react"
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
import { useNoteStore } from "@/lib/store"
import { useTheme } from "next-themes"

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const { user } = useNoteStore()
  const [name, setName] = useState(user.name)
  const [avatar, setAvatar] = useState(user.avatar)
  const { theme, setTheme } = useTheme()

  const handleSave = () => {
    // In a real app, this would update the user in the store
    alert("Settings saved!")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>Customize your NOTIQ experience.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Display Name
            </label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <label htmlFor="avatar" className="text-sm font-medium">
              Avatar Initial
            </label>
            <Input
              id="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value.charAt(0).toUpperCase())}
              maxLength={1}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="theme" className="text-sm font-medium">
              Theme
            </label>
            <div className="flex gap-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                onClick={() => setTheme("light")}
                className="flex-1"
              >
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                onClick={() => setTheme("dark")}
                className="flex-1"
              >
                Dark
              </Button>
              <Button
                variant={theme === "system" ? "default" : "outline"}
                onClick={() => setTheme("system")}
                className="flex-1"
              >
                System
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
