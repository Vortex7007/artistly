import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <Link
      href={`/artists?category=${encodeURIComponent(title.slice(0, -1))}`} // "Singers" → "Singer"
      className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className="relative w-full h-36">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 bg-white text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
