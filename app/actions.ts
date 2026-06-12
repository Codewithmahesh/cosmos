'use server'

import { promises as fs } from 'fs'
import path from 'path'

export async function joinWaitlist(email: string): Promise<{ success: boolean }> {
  const trimmed = email.trim()

  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { success: false }
  }

  const entry = {
    email: trimmed,
    timestamp: new Date().toISOString(),
  }

  const filePath = path.join(process.cwd(), 'waitlist.json')

  try {
    let list: typeof entry[] = []
    try {
      const raw = await fs.readFile(filePath, 'utf8')
      list = JSON.parse(raw)
    } catch {
      // File doesn't exist yet — start fresh
    }
    list.push(entry)
    await fs.writeFile(filePath, JSON.stringify(list, null, 2))
  } catch (err) {
    console.error('Waitlist write error:', err)
  }

  return { success: true }
}
