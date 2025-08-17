"use client";

import { useEffect, useMemo, useState } from "react";
import PlantFilter, { Filters } from "@/components/shared/PlantFilter";
import PlantList from "@/components/shared/PlantList";

interface Plant {
  id: number;
  common_name: string | null;
  scientific_name: string;
  image_url?: string | null;
  price: number | string;
  type?: string;
  sun?: string;
  maintenance?: string;
  category?: string;
  description?: string;
}

/**/
class PlantEntity {
  id: number;
  common_name: string | null;
  scientific_name: string;
  image_url?: string | null;
  price: number;
  type?: string;
  sun?: string;
  maintenance?: string;
  category?: string;
  description?: string;

  constructor(p: Plant) {
    this.id = p.id;
    this.common_name = p.common_name;
    this.scientific_name = p.scientific_name;
    this.image_url = p.image_url;
    this.price = typeof p.price === "string" ? Number(p.price) : p.price;
    this.type = p.type;
    this.sun = p.sun;
    this.maintenance = p.maintenance;
    this.category = p.category;
    this.description = p.description;
  }

  /**/
  matches(filters: Filters): boolean {
    const typeOk =
      filters.type === "sve" ||
      this.type === filters.type ||
      this.category === filters.type;
    const sunOk = filters.sun === "sve" || this.sun === filters.sun;
    const maintOk =
      filters.maintenance === "sve" || this.maintenance === filters.maintenance;
    return typeOk && sunOk && maintOk;
  }

  /**/
  get priceFormatted(): string {
    return `${this.price} RSD`;
  }
}

/**/
class Paginator<T> {
  private items: T[];
  private perPage: number;
  private _page: number;

  constructor(items: T[], perPage: number, page = 1) {
    this.items = items;
    this.perPage = perPage;
    this._page = page;
  }

  setPage(page: number) {
    this._page = Math.max(1, Math.min(page, this.totalPages));
  }

  get page() {
    return this._page;
  }

  get totalPages() {
    return Math.max(1, Math.ceil(this.items.length / this.perPage));
  }

  slice(): T[] {
    const start = (this._page - 1) * this.perPage;
    return this.items.slice(start, start + this.perPage);
  }

  next() {
    this.setPage(this._page + 1);
  }

  prev() {
    this.setPage(this._page - 1);
  }
}

export default function ClientSideCatalog({ plants }: { plants: Plant[] }) {
  const [filters, setFilters] = useState<Filters>({
    type: "sve",
    sun: "sve",
    maintenance: "sve",
  });

  //
  const [page, setPage] = useState(1);
  const perPage = 10;

  //
  useEffect(() => {
    setPage(1);
  }, [filters]);

  //
  const plantEntities = useMemo(
    () => plants.map((p) => new PlantEntity(p)),
    [plants]
  );

  //
  const filtered = useMemo(
    () => plantEntities.filter((pe) => pe.matches(filters)),
    [plantEntities, filters]
  );

  //
  const paginator = useMemo(
    () => new Paginator(filtered, perPage, page),
    [filtered, page]
  );
  const paginated = paginator.slice();
  const totalPages = paginator.totalPages;

  const canPrev = page > 1;
  const canNext = page < totalPages;

  //
  useEffect(() => {
    paginator.setPage(page);
  }, [page, paginator]);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-primary">Lista biljaka</h1>

      <div className="space-y-4 mb-6">
        <div className="rounded-lg p-4" style={{ backgroundColor: "#f3f3f3" }}>
          <PlantFilter onChange={setFilters} />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          className="px-4 py-2 rounded-full border disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={!canPrev}
        >
          ← Prethodna
        </button>

        <span className="text-sm">
          Strana <strong>{page}</strong> od <strong>{totalPages}</strong> •
          Prikazano {paginated.length} / {filtered.length}
        </span>

        <button
          className="px-4 py-2 rounded-full border disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={!canNext}
        >
          Sledeća →
        </button>
      </div>

      <PlantList plants={paginated} />

      {filtered.length > perPage && (
        <div className="flex items-center justify-between mt-6">
          <button
            className="px-4 py-2 rounded-full border disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={!canPrev}
          >
            ← Prethodna
          </button>

          <span className="text-sm">
            Strana <strong>{page}</strong> od <strong>{totalPages}</strong>
          </span>

          <button
            className="px-4 py-2 rounded-full border disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={!canNext}
          >
            Sledeća →
          </button>
        </div>
      )}
    </main>
  );
}
