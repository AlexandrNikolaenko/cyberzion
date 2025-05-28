'use client'

export function BorderButton({onClick, children}) {
  return (
    <button className="border-button" onClick={onClick}>
      {children}
    </button>
  )
}

export function SmallBorderButton({onClick, children}) {
  return (
    <button className="small-border-button" onClick={onClick}>
      {children}
    </button>
  )
}

export function AccentButton({onClick, children}) {
  return (
    <button className="accent-button" onClick={onClick}>
      {children}
    </button>
  )
}

export function AccentAngleButton({onClick, children}) {
  return (
    <button className="accent-angle-button" onClick={onClick}>
      {children}
    </button>
  )
}