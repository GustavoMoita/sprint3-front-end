const paths = {
  arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
  aperture: <><circle cx="12" cy="12" r="9" /><path d="m8.5 4.5 5 8.5" /><path d="m19.5 8.5-9.8.2" /><path d="m15.5 19.5-5-8.5" /><path d="m4.5 15.5 9.8-.2" /></>,
  close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  focus: <><path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M16 3h3a2 2 0 0 1 2 2v3" /><path d="M8 21H5a2 2 0 0 1-2-2v-3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" /><circle cx="12" cy="12" r="2.5" /></>,
  menu: <><path d="M4 8h16" /><path d="M4 16h16" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  sparkle: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4Z" /><path d="m18.5 15 .7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7Z" /></>,
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      {paths[name]}
    </svg>
  )
}
