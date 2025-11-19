import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Announcements() {
  const [items, setItems] = useState([])
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/announcements`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        // silent fail
      }
    }
    load()
  }, [])

  if (hidden || items.length === 0) return null

  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center gap-3">
        <div className="flex-1 overflow-hidden">
          <div className="whitespace-nowrap animate-[slide_12s_linear_infinite]">
            {items.map((a, idx) => (
              <span key={a.key} className="mr-8">
                <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-amber-100 border border-amber-200 mr-2">{a.tag || 'Update'}</span>
                <span className="font-medium">{a.title}:</span>
                <span className="ml-2 opacity-90">{a.message}</span>
              </span>
            ))}
          </div>
        </div>
        <button onClick={() => setHidden(true)} className="text-sm opacity-70 hover:opacity-100">Dismiss</button>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default Announcements
