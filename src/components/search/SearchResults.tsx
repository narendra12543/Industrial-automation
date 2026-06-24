interface SearchResult {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  results: SearchResult[];
}

export default function SearchResults({
  results,
}: Props) {
  if (results.length === 0) {
    return (
      <p className="py-4 text-sm text-slate-500">
        No products found.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {results.map((product) => (
        <a
          key={product.id}
          href={`/products/${product.slug}`}
          className="
            block
            rounded-lg
            border
            border-slate-200
            p-3
            transition
            hover:border-[#0F2747]
            hover:bg-slate-50
          "
        >
          {product.name}
        </a>
      ))}
    </div>
  );
}