import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, direction = 'up', as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as]
  const offset = direction === 'up' ? { y: 34 } : { x: direction === 'left' ? 34 : -34 }

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
