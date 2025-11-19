import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/services`)
        const data = await res.json()
        setServices(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="services" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Services & Packages</h2>
          <p className="text-neutral-600 mt-2">Carefully designed offerings for weddings, portraits, and maternity sessions.</p>
        </div>
        {loading ? (
          <p className="text-neutral-500">Loading services…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.key} className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900">{s.name}</h3>
                <p className="text-neutral-600 mt-2">{s.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-neutral-800">Deliverables</p>
                  <ul className="mt-2 list-disc list-inside text-neutral-600 space-y-1">
                    {s.deliverables?.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-neutral-800">{s.duration}</span>
                  {s.price && <span className="text-neutral-900 font-medium">{s.price}</span>}
                </div>
                {s.addons?.length > 0 && (
                  <p className="text-neutral-500 mt-2 text-sm">Add-ons: {s.addons.join(', ')}</p>
                )}
                <a href="#booking" className="inline-block mt-4 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Enquire</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
