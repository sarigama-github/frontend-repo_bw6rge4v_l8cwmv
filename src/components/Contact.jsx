import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ ok: true })
      setForm({ full_name: '', email: '', phone: '', subject: 'General Enquiry', message: '' })
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Contact & Support</h2>
          <p className="text-neutral-600 mt-2">Based in Nashik. We’d love to hear about your story and how we can help.</p>
          <div className="mt-6 space-y-2 text-neutral-700">
            <p><span className="font-medium">WhatsApp:</span> <a className="underline" href="https://wa.me/919999999999" target="_blank">+91 99999 99999</a></p>
            <p><span className="font-medium">Email:</span> hello@pictiv.studio</p>
            <p><span className="font-medium">Instagram:</span> <a className="underline" href="https://instagram.com/dheeraj_deore14" target="_blank">@dheeraj_deore14</a></p>
            <p><span className="font-medium">Location:</span> Nashik</p>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700">Full Name</label>
            <input value={form.full_name} onChange={update('full_name')} required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email</label>
              <input type="email" value={form.email} onChange={update('email')} className="mt-1 w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Phone</label>
              <input value={form.phone} onChange={update('phone')} className="mt-1 w-full border rounded-lg px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Subject</label>
            <select value={form.subject} onChange={update('subject')} className="mt-1 w-full border rounded-lg px-3 py-2">
              <option>General Enquiry</option>
              <option>Wedding Package</option>
              <option>Pre-Wedding</option>
              <option>Maternity</option>
              <option>Portraits</option>
              <option>Event Coverage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Message</label>
            <textarea rows={4} value={form.message} onChange={update('message')} required className="mt-1 w-full border rounded-lg px-3 py-2" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">Send</button>
            {status === 'Submitting...' && <span className="text-neutral-600">Submitting…</span>}
            {status?.ok && <span className="text-green-700">Thank you! We will get back shortly.</span>}
            {status?.ok === false && <span className="text-red-600">{status.msg}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
