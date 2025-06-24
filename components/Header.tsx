import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-indigo-700">TalentHub</Link>
<nav className="space-x-4 text-sm">
  <Link href="/" className="hover:text-indigo-600">Home</Link>
  <Link href="/artists" className="hover:text-indigo-600">Artists</Link>
  <Link href="/contact" className="hover:text-indigo-600">Contact</Link> {/* ← Add this */}
</nav>

    </header>
  );
}
