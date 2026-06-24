"use client";

import { useEffect, useState, useTransition } from "react";

import { searchProducts } from "@/actions/products/search";
import SearchResults from "./SearchResults";

interface Product {
  id: string;
  name: string;
  slug: string;
}

interface ProductSearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductSearchModal({
  open,
  onClose,
}: ProductSearchModalProps) {
  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState<Product[]>([]);

  const [isPending, startTransition] =
    useTransition();

  useEffect(() => {
    const timeout =
      setTimeout(() => {
        if (!query.trim()) {
          return;
        }

        startTransition(async () => {
          const data =
            await searchProducts(
              query
            );

          setResults(
            data.map((item) => ({
              id: item.id,
              name: item.name,
              slug: item.slug,
            }))
          );
        });
      }, 300);

    return () =>
      clearTimeout(timeout);
  }, [query]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-start
        justify-center
        bg-black/50
        p-4
      "
    >
      <div
        className="
          mt-20
          w-full
          max-w-2xl
          rounded-2xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#0F2747]">
            Search Products
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-lg
              px-2
              py-1
              text-slate-500
              hover:bg-slate-100
            "
          >
            ✕
          </button>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => {
            const value =
              e.target.value;

            setQuery(value);

            if (!value.trim()) {
              setResults([]);
            }
          }}
          className="
            w-full
            rounded-lg
            border
            border-slate-300
            px-4
            py-3
            outline-none
            focus:border-[#0F2747]
          "
        />

        <div className="mt-4">
          {isPending ? (
            <p className="text-sm text-slate-500">
              Searching...
            </p>
          ) : (
            <SearchResults
              results={results}
            />
          )}
        </div>
      </div>
    </div>
  );
}