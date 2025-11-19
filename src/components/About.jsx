function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1400&auto=format&fit=crop" alt="Dhiraj" className="w-full h-64 object-cover rounded-2xl" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">About the Photographer</h2>
            <p className="text-neutral-700 mt-4 leading-relaxed">
              Based in Nashik, Dhiraj crafts timeless imagery rooted in tradition and elegance. His work focuses on authentic moments, refined compositions, and a classic aesthetic that endures.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <p className="font-medium text-neutral-900">Philosophy</p>
                <p className="text-neutral-600 mt-1">Simplicity, sincerity, and pristine attention to detail.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <p className="font-medium text-neutral-900">Experience</p>
                <p className="text-neutral-600 mt-1">Weddings, makeup-based portraits, and intimate family sessions.</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-neutral-700 italic">“An absolutely professional experience — the photographs are beautiful and heartfelt.”</p>
              <p className="text-neutral-600 mt-1">— A delighted client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
