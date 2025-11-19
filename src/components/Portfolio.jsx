function Portfolio() {
  const categories = [
    {
      key: 'wedding',
      title: 'Wedding Photography',
      desc: 'Candid rituals, timeless portraits, precious family moments.',
      img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
    },
    {
      key: 'portrait',
      title: 'Portrait Photography',
      desc: 'Editorial, expressive, and classic portraiture.',
      img: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1600&auto=format&fit=crop',
    },
    {
      key: 'maternity',
      title: 'Maternity Photography',
      desc: 'Serene, artistic frames that celebrate motherhood.',
      img: 'https://images.unsplash.com/photo-1589740074270-71bfc1e92d7b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      key: 'other',
      title: 'Other Assignments',
      desc: 'Engagements, families, studio fashion, and more.',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Portfolio</h2>
          <p className="text-neutral-600 mt-2">A glimpse into the stories we are honored to tell.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div key={c.key} className="group relative overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
              <img src={c.img} alt={c.title} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="text-white/80 mt-1">{c.desc}</p>
                <a href="#booking" className="inline-block mt-3 px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90">Enquire</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
