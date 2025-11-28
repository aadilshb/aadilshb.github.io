import React from 'react'

export default function AnimatedBlob() {
  return (
    <div className="blob-wrap" aria-hidden>
      {/* Blob 1 - purple/teal */}
      <svg className="blob blob-1" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#7c3aed" stopOpacity="0.95"/>
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        <g transform="translate(300,300)">
          <path d="M120,-156C162,-132,195,-96,206,-54C217,-12,207,36,181,72C154,108,111,132,64,148C17,164,-36,172,-76,149C-116,126,-144,72,-164,12C-184,-48,-196,-114,-166,-150C-135,-186,-63,-192,1,-194C65,-196,129,-180,120,-156Z"
            fill="url(#g1)" transform="scale(0.9)"></path>
        </g>
      </svg>

      {/* Blob 2 - coral */}
      <svg className="blob blob-2" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#ff7a59" stopOpacity="0.95"/>
            <stop offset="1" stopColor="#ffd36b" stopOpacity="0.85"/>
          </linearGradient>
        </defs>
        <g transform="translate(300,300)">
          <path d="M124,-140C161,-116,187,-80,196,-40C205,0,196,44,171,74C147,104,106,120,66,142C26,164,-18,192,-60,186C-102,180,-141,140,-160,94C-179,48,-178,-4,-158,-44C-138,-84,-98,-112,-56,-132C-13,-152,32,-164,79,-164C126,-164,87,-164,124,-140Z"
            fill="url(#g2)" transform="scale(0.84)"></path>
        </g>
      </svg>
    </div>
  )
}