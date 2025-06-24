export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Talented Artists</h1>
      <p className="text-lg mb-6">Singers, Dancers, DJs & more — all in one place.</p>
      <a href="/artists" className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
        Explore Artists
      </a>
    </section>
  );
}
