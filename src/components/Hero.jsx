import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-24 pb-20">
        <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-8 sm:p-12 border border-white/10 text-white">
          <p className="uppercase tracking-[0.35em] text-sm text-white/70 mb-4">Pictiv.Studio</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight mb-4">Timeless Photography with a Classic Soul</h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl">Wedding, Portrait, and Maternity photography crafted in Nashik by Dhiraj. Elegant imagery, sincere moments, enduring stories.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="px-5 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition">View Portfolio</a>
            <a href="#booking" className="px-5 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition">Book a Session</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
