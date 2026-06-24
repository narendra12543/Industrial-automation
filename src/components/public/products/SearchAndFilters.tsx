"use client";

interface SearchAndFiltersProps {
  search: string;
  selectedCategory: string;
  categories: string[];
  onSearchChange: (
    value: string
  ) => void;
  onCategoryChange: (
    value: string
  ) => void;
}

export default function SearchAndFilters({
  search,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
}: SearchAndFiltersProps) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            onSearchChange(
              e.target.value
            )
          }
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            focus:border-[#0F2747]
          "
        />

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() =>
              onCategoryChange("all")
            }
            className={`
              rounded-full
              px-5
              py-2
              text-sm
              font-medium
              transition
              ${
                selectedCategory ===
                "all"
                  ? "bg-[#0F2747] text-white"
                  : "bg-slate-100 text-slate-700"
              }
            `}
          >
            All
          </button>

          {categories.map(
            (category) => (
              <button
                key={category}
                onClick={() =>
                  onCategoryChange(
                    category
                  )
                }
                className={`
                  rounded-full
                  px-5
                  py-2
                  text-sm
                  font-medium
                  transition
                  ${
                    selectedCategory ===
                    category
                      ? "bg-[#0F2747] text-white"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}