import React, { useEffect } from 'react'

/**
 * VideoModal
 * Props:
 *  - videoId (string) : YouTube video ID (e.g. "AbCdEf12345")
 *  - open (bool)      : whether modal is visible
 *  - onClose (func)   : function to call when closing modal
 *
 * Behavior:
 *  - Esc closes modal
 *  - Clicking backdrop closes modal
 *  - Stops video by removing iframe when closed
 */

export default function VideoModal({ videoId, open, onClose }) {
  useEffect(() => {
    if (!open) return

    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  // Build embed URL with autoplay + modestbranding + rel=0 (no related videos)
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`

  return (
    <div className="video-modal" role="dialog" aria-modal="true" aria-label="Project demo">
      <div className="video-modal-backdrop" onClick={onClose} />
      <div className="video-modal-panel" role="document">
        <button className="video-modal-close" onClick={onClose} aria-label="Close demo">✕</button>
        <div className="video-embed">
          {/* iframe removed when modal closed so playback stops */}
          <iframe
            title="Demo video"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}