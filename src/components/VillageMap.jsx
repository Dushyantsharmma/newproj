import { useState } from "react";
import { Link } from "react-router-dom";
import { KARSOG_VILLAGES } from "../data/karsogVillages";

export default function VillageMap() {
  const [search, setSearch] = useState("");

  const filtered = KARSOG_VILLAGES.filter(v =>
    v.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white rounded-xl p-6 shadow mt-10">
      <h2 className="text-2xl font-bold mb-3 text-slate-900">
        Driving School Coverage – HP-30 Karsog
      </h2>

      <p className="text-slate-600 mb-4">
        We provide professional driving lessons in all villages under
        <strong> Karsog RTO (HP-30)</strong>.  
        Search your village below.
      </p>

      <input
        type="text"
        placeholder="Search your village..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full border px-4 py-2 rounded-lg mb-6"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[400px] overflow-y-auto pr-2">
        {filtered.map(village => (
          <Link
            key={village}
            to={`/village/${village.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-[#EFEDE0] hover:bg-amber-100 border rounded-lg p-2 text-center text-sm font-medium text-slate-800"
          >
            {village}
          </Link>
        ))}
      </div>
    </section>
  );
}
