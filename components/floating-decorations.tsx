"use client"

import { useEffect, useState } from "react"

export function FloatingDecorations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle floating elements */}
      <div className="floating-element top-20 left-10 animate-gentle-float text-4xl delay-1000">♻️</div>
      <div className="floating-element top-40 right-20 animate-peaceful-sway text-3xl delay-2000">🏭</div>
      <div className="floating-element bottom-32 left-1/4 animate-soft-pulse text-2xl delay-3000">⚙️</div>
      <div className="floating-element top-1/3 right-1/3 animate-zen-breathe text-3xl">🔧</div>
      <div className="floating-element bottom-20 right-10 animate-gentle-float text-2xl delay-1000">🌱</div>
      <div className="floating-element top-32 right-32 animate-peaceful-sway text-3xl delay-2000">💧</div>
      <div className="floating-element bottom-40 left-20 animate-zen-breathe text-2xl delay-1000">🔄</div>
      <div className="floating-element top-1/2 left-10 animate-soft-pulse text-3xl delay-3000">⚡</div>
    </div>
  )
}
