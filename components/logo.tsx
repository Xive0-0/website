import type { FC } from "react"

interface LogoProps {
  className?: string
  size?: number
  color?: string
}

export const Logo: FC<LogoProps> = ({ className = "", size = 24, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 8.5C3 8.5 5.5 7 8 7C10.5 7 11.5 8.5 14 8.5C16.5 8.5 19 7 19 7M3 12.5C3 12.5 5.5 11 8 11C10.5 11 11.5 12.5 14 12.5C16.5 12.5 19 11 19 11M3 16.5C3 16.5 5.5 15 8 15C10.5 15 11.5 16.5 14 16.5C16.5 16.5 19 15 19 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

