type Artist = {
  name: string;
  category: string;
  city: string;
  feeRange: string;
};

type Props = {
  data: Artist[];
};

export default function ArtistTable({ data }: Props) {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">City</th>
            <th className="px-4 py-3">Fee</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-3">{artist.name}</td>
              <td className="px-4 py-3">{artist.category}</td>
              <td className="px-4 py-3">{artist.city}</td>
              <td className="px-4 py-3">{artist.feeRange}</td>
              <td className="px-4 py-3">
                <button className="text-sm text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
