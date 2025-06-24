import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtistTable from "@/components/ArtistTable";
import { mockSubmissions } from "@/lib/mockSubmissions";

export default function ManagerDashboard() {
  const artists = mockSubmissions; // simulate fetch

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Manager Dashboard</h1>

        {artists.length === 0 ? (
          <p className="text-center text-gray-500">No artist submissions found.</p>
        ) : (
          <ArtistTable data={artists} />
        )}
      </main>
      <Footer />
    </>
  );
}
