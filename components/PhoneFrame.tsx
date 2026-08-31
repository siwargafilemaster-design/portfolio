'use client'
import { useState, useEffect } from 'react'

export default function PhoneFrame({
  label = 'Demo video',
  sub,
  size = 'sm',
  videoUrl,
}: {
  label?: string
  sub?: string
  size?: 'sm' | 'lg'
  videoUrl?: string
}) {
  const [open, setOpen] = useState(false)
  const hasVideo = Boolean(videoUrl)
  const width = size === 'lg' ? 'w-[172px]' : 'w-[150px]'

  // ESC untuk menutup + kunci scroll saat modal terbuka
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        className={`relative ${width} aspect-[9/19] flex-none rounded-[26px] border border-[#1d2b45] bg-night p-2 shadow-xl ${hasVideo ? 'cursor-pointer' : ''}`}
        onClick={hasVideo ? () => setOpen(true) : undefined}
        role={hasVideo ? 'button' : undefined}
        tabIndex={hasVideo ? 0 : undefined}
        aria-label={hasVideo ? 'Perbesar video demo' : undefined}
        onKeyDown={
          hasVideo
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpen(true)
                }
              }
            : undefined
        }
      >
        <div className="absolute left-1/2 top-[15px] z-10 h-[5px] w-[52px] -translate-x-1/2 rounded-full bg-[#2a3a5a]" />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[19px] bg-gradient-to-b from-[#16233d] to-[#0e1830]">
          {hasVideo ? (
            <>
              <video
                src={videoUrl}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
              <span className="pointer-events-none absolute bottom-2 z-10 rounded-full bg-black/50 px-2 py-0.5 font-mono text-[0.5rem] uppercase tracking-widest text-white/80">
                tap to expand
              </span>
            </>
          ) : (
            <>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brass bg-brass/15">
                <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-brass" />
              </div>
              <div className="px-3 text-center font-mono text-[0.6rem] uppercase tracking-widest text-[#8ba0c8]">{label}</div>
              {sub && <div className="px-3 text-center font-mono text-[0.54rem] text-[#5b6d8f]">{sub}</div>}
            </>
          )}
        </div>
      </div>

      {open && hasVideo && (
        <div
          className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          style={{ height: '100dvh' }}
          onClick={() => setOpen(false)}
        >
          <video
            src={videoUrl}
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl border border-night-line shadow-2xl"
            style={{ maxHeight: '85dvh', maxWidth: '100%' }}
            controls
            autoPlay
            playsInline
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Tutup"
            className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-lg"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}