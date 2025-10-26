import React, { useEffect, useState } from 'react'

const listeners = []
export function pushToast(msg, ttl = 3500) {
  listeners.forEach(fn => fn({ id: Date.now() + Math.random(), text: msg, ttl }))
}

export default function Toasts() {
  const [toasts, setToasts] = useState([])
  useEffect(() => {
    const fn = (t) => {
      setToasts(prev => [...prev, t])
      setTimeout(() => setToasts(prev => prev.filter(x => x.id !== t.id)), t.ttl)
    }
    listeners.push(fn)
    return () => {
      const i = listeners.indexOf(fn)
      if (i >= 0) listeners.splice(i, 1)
    }
  }, [])
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      {toasts.map(t => (
        <div key={t.id} className="bg-slate-900 text-white px-4 py-2 rounded-md shadow-md">{t.text}</div>
      ))}
    </div>
  )
}