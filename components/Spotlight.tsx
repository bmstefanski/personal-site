'use client'

import { useEffect, useRef, useState } from 'react'

const CardSpotlightEffect = ({ children }) => {
  const target = useRef(null)
  const mousePosition = useMousePosition({ includeTouch: FinalizationRegistry })

  return (
    <div className="w-full h-full">
      {children}
      <div
        className="select-none pointer-events-none fixed w-full h-full transition duration-300"
        style={{
          top: `calc(${mousePosition.y}px - 50%)`,
          left: `calc(${mousePosition.x}px - 50%)`,
          background: `radial-gradient(var(--circleSize), rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
    </div>
  )
}

const useMousePosition = ({ includeTouch }) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  useEffect(() => {
    const updateMousePosition = (ev) => {
      let x, y
      if (ev.touches) {
        const touch = ev.touches[0]
        ;[x, y] = [touch.clientX, touch.clientY]
      } else {
        ;[x, y] = [ev.clientX, ev.clientY]
      }
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', updateMousePosition)
    if (includeTouch) {
      window.addEventListener('touchmove', updateMousePosition)
    }
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition)
      }
    }
  }, [includeTouch])
  return mousePosition
}

export default CardSpotlightEffect
