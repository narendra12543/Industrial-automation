interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (
    page: number
  ) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="py-10">
      <div className="flex justify-center gap-2">
        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map((page) => (
          <button
            key={page}
            onClick={() =>
              onPageChange(page)
            }
            className={`
              h-10
              w-10
              rounded-lg
              border
              transition
              ${
                currentPage === page
                  ? "bg-[#0F2747] text-white"
                  : "bg-white hover:bg-slate-100"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}