import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Booking from './components/Booking'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-white/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Pictiv.Studio" className="h-8 w-8" />
            <span className="font-semibold tracking-wide">Pictiv.Studio</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#portfolio" className="hover:opacity-80">Portfolio</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#booking" className="hover:opacity-80">Bookings</a>
            <a href="#about" className="hover:opacity-80">About</a>
          </nav>
          <a href="#booking" className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white text-sm">Enquire</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Portfolio />
        <Services />
        <Booking />
        <About />

        <footer className="py-12 bg-neutral-950 text-white">
          <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-lg font-medium">Stay in touch</p>
              <p className="text-white/70 mt-2">Nashik • Instagram: @dheeraj_deore14</p>
            </div>
            <div>
              <p className="text-lg font-medium">Contact</p>
              <p className="text-white/70 mt-2">Email: hello@pictiv.studio</p>
              <p className="text-white/70">Phone: +91 00000 00000</p>
            </div>
            <div>
              <a href="https://wa.me/919999999999" target="_blank" className="inline-block px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90">WhatsApp</a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-10 text-white/60 text-sm">© {new Date().getFullYear()} Pictiv.Studio</div>
        </footer>
      </main>
    </div>
  )
}

export default App
