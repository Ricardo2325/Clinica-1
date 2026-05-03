export function GoldDivider({ className }: { className?: string }) {
  return <div className={`gold-line w-full ${className ?? ''}`} />
}

export function GoldDividerShort({ className }: { className?: string }) {
  return <div className={`gold-line w-16 ${className ?? ''}`} />
}
