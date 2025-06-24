"use client";

import { useSearchParams } from "next/navigation";

export default function ArtistFilterWrapper() {
  const params = useSearchParams();
  const category = params.get("category");
  const location = params.get("location");

  return (
    <div className="text-gray-600 text-sm">
      <p>Filter active:</p>
      <ul className="list-disc ml-5">
        {category && <li>Category: {category}</li>}
        {location && <li>Location: {location}</li>}
      </ul>
    </div>
  );
}
