import { Crown, Sparkles, Award, ShoppingBag } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-600/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-light tracking-widest">LUMIÈRE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-wider">
            <a href="#collection" className="hover:text-yellow-500 transition-colors">COLLECTION</a>
            <a href="#story" className="hover:text-yellow-500 transition-colors">OUR STORY</a>
            <a href="#craftsmanship" className="hover:text-yellow-500 transition-colors">CRAFTSMANSHIP</a>
          </div>
          <button className="border border-yellow-600 px-6 py-2 text-sm tracking-widest hover:bg-yellow-600 hover:text-black transition-all">
            INQUIRE
          </button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-900/5 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-500 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-6">
            EXCEPTIONAL
            <span className="block text-yellow-500 mt-2">ELEGANCE</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide mb-12 max-w-3xl mx-auto">
            Where timeless craftsmanship meets contemporary luxury
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-12 py-4 text-sm tracking-widest font-medium hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105">
            EXPLORE COLLECTION
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-yellow-500 to-transparent"></div>
        </div>
      </section>

      <section id="collection" className="py-24 px-6 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-widest mb-4">SIGNATURE PIECES</h2>
            <div className="w-24 h-px bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'ROYAL HERITAGE', price: '12,500', icon: Crown },
              { name: 'ETERNAL RADIANCE', price: '18,900', icon: Sparkles },
              { name: 'PRESTIGE EDITION', price: '25,000', icon: Award }
            ].map((product, index) => (
              <div key={index} className="group relative overflow-hidden bg-neutral-900 border border-yellow-600/20 hover:border-yellow-600/60 transition-all">
                <div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
                  <product.icon className="w-24 h-24 text-yellow-600/30 group-hover:text-yellow-500/50 transition-all group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl tracking-widest mb-2">{product.name}</h3>
                  <p className="text-yellow-500 text-2xl font-light mb-4">${product.price}</p>
                  <button className="w-full border border-yellow-600 py-3 text-sm tracking-widest hover:bg-yellow-600 hover:text-black transition-all flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="py-24 px-6 bg-neutral-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-yellow-600 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block border border-yellow-600/40 px-4 py-2 mb-6">
              <span className="text-yellow-500 text-sm tracking-widest">SINCE 1892</span>
            </div>
            <h2 className="text-5xl font-light tracking-wider mb-6 leading-tight">
              A LEGACY OF
              <span className="block text-yellow-500">UNMATCHED EXCELLENCE</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              For over a century, we have been at the forefront of luxury craftsmanship, creating pieces that transcend generations. Each creation is a testament to our unwavering commitment to perfection.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our artisans combine time-honored techniques with innovative design, ensuring every piece is not just an object, but a masterpiece that tells a story of dedication, passion, and unparalleled quality.
            </p>
            <button className="border border-yellow-600 px-8 py-3 text-sm tracking-widest hover:bg-yellow-600 hover:text-black transition-all">
              DISCOVER OUR HERITAGE
            </button>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-yellow-900/20 to-neutral-900 border border-yellow-600/30 flex items-center justify-center">
              <Crown className="w-32 h-32 text-yellow-600/40" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-yellow-600/50"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-yellow-600/50"></div>
          </div>
        </div>
      </section>

      <section id="craftsmanship" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-widest mb-4">THE ART OF PERFECTION</h2>
            <div className="w-24 h-px bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every detail matters. Every moment counts. Excellence is not an act, but a habit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'MASTER ARTISANS', desc: 'Trained through decades of apprenticeship, our craftsmen represent the pinnacle of their art.' },
              { title: 'RARE MATERIALS', desc: 'Sourced from the finest suppliers worldwide, each material is selected for its exceptional quality.' },
              { title: 'TIMELESS DESIGN', desc: 'Our designs honor tradition while embracing innovation, creating pieces that endure forever.' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 border border-yellow-600 flex items-center justify-center group-hover:bg-yellow-600 transition-all">
                  <span className="text-2xl font-light text-yellow-500 group-hover:text-black">{index + 1}</span>
                </div>
                <h3 className="text-xl tracking-widest mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 border-t border-yellow-600/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="w-6 h-6 text-yellow-500" />
            <span className="text-xl font-light tracking-widest">LUMIÈRE</span>
          </div>
          <p className="text-gray-500 text-sm tracking-wider mb-4">CRAFTING LUXURY SINCE 1892</p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-500 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">TERMS</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">CONTACT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
