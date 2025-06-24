"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import {
  artists,
  artistCategories,
  artistLocations,
  artistPriceRanges,
} from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function ArtistsPage() {
  const searchParams = useSearchParams();

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // ✅ Sync category from query param on first load
  useEffect(() => {
    const initialCategory = searchParams.get("category");
    if (initialCategory) setCategory(initialCategory);
  }, [searchParams]);

  const clearFilters = () => {
    setCategory("");
    setLocation("");
    setPriceRange("");
  };

  const filtered = artists.filter((artist) => {
    return (
      (category === "" || artist.category === category) &&
      (location === "" || artist.location === location) &&
      (priceRange === "" || artist.priceRange === priceRange)
    );
  });

  return (
    <main className="px-4 md:px-16 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Browse Artists</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <FilterBlock
          label="Category"
          options={artistCategories}
          selected={category}
          onChange={setCategory}
        />
        <FilterBlock
          label="Location"
          options={artistLocations}
          selected={location}
          onChange={setLocation}
        />
        <FilterBlock
          label="Price"
          options={artistPriceRanges}
          selected={priceRange}
          onChange={setPriceRange}
        />
      </div>

      {/* Clear Filters Button */}
      <div className="mb-10 text-right">
        {(category || location || priceRange) && (
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        )}
      </div>

      {/* Artists Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No artists match your filter.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((artist) => (
            <ArtistCard key={artist.name} {...artist} />
          ))}
        </div>
      )}
    </main>
  );
}
