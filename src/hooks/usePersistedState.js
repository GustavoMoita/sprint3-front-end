import { useEffect, useState } from 'react'

export function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = window.localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // A experiência continua funcional quando o armazenamento está indisponível.
    }
  }, [key, value])

  return [value, setValue]
}
