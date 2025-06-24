// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { categories } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <section className="px-4 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </section>
      <section className="px-4 md:px-16 py-12 bg-orange-50 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
    Are you an artist?
  </h2>
  <p className="mb-6 text-gray-600">
    Join our platform and get discovered. Fill out a quick form to get started!
  </p>
  <a
    href="/onboard"
    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition"
  >
    Become an Artist
  </a>
</section>

      <Footer />
    </>
  );
}
