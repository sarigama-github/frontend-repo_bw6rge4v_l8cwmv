import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Booking() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_key: 'wedding_day',
    date: '',
    time: '',
    location: '',
    notes: '',
    contact_via_whatsapp: true,
  })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ ok: true, wa: data.whatsapp })
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    }
  }

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  return (
    <section id="booking" className="py-16 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-6">Book a Session</h2>
        <form onSubmit={submit} className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-neutral-700">Full Name</label>
            <input value={form.full_name} onChange={update('full_name')} required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Email</label>
            <input type="email" value={form.email} onChange={update('email')} className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Phone</label>
            <input value={form.phone} onChange={update('phone')} required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Service</label>
            <select value={form.service_key} onChange={update('service_key')} className="mt-1 w-full border rounded-lg px-3 py-2">
              <option value="wedding_day">Wedding Day Package</option>
              <option value="pre_wedding">Pre-Wedding Shoot</option>
              <option value="maternity">Maternity Package</option>
              <option value="portrait">Makeup & Portrait Session</option>
              <option value="event">Event Coverage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Preferred Date</label>
            <input type="date" value={form.date} onChange={update('date')} required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Time</label>
            <input type="time" value={form.time} onChange={update('time')} required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Location</label>
            <input value={form.location} onChange={update('location')} required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-neutral-700">Notes</label>
            <textarea value={form.notes} onChange={update('notes')} rows={3} className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.contact_via_whatsapp} onChange={update('contact_via_whatsapp')} />
            Contact me on WhatsApp
          </label>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-5 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Submit</button>
            {status === 'Submitting...' && <span className="text-neutral-600">Submitting…</span>}
            {status?.ok && (
              <a href={status.wa} target="_blank" className="text-green-700 underline">Open WhatsApp Confirmation</a>
            )}
            {status?.ok === false && <span className="text-red-600">{status.msg}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Booking
