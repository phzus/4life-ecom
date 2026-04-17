"use client"

import { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
}

const HeaderHeightTracker = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const updateHeight = () => {
      const h = el.getBoundingClientRect().height
      document.documentElement.style.setProperty("--header-height", `${h}px`)
    }

    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
}

export default HeaderHeightTracker
