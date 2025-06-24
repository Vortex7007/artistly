import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
};

export default function ArtistCard({ name, category, priceRange, location, image }: Props) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="relative w-full h-40">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{category} · {location}</p>
        <p className="text-sm text-gray-600">Price: {priceRange}</p>

        {/* Orange button linking to contact */}
        <Link
          href="/contact"
          className="inline-block mt-3 w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Ask for Quote
        </Link>
      </div>
    </div>
  );
}
