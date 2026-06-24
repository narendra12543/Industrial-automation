"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchAndFilters from "./SearchAndFilters";
import ProductsGrid from "./ProductsGrid";
import Pagination from "./Pagination";
import { ProductType } from "@/types/product";

interface ProductsCatalogProps {
  products: ProductType[];
  categories: string[];
}

const PRODUCTS_PER_PAGE = 12;

export default function ProductsCatalog({
  products,
  categories,
}: ProductsCatalogProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch =
    searchParams.get("q") || "";

  const initialCategory =
    searchParams.get("category") ||
    "all";

  const initialPage = Number(
    searchParams.get("page") || "1"
  );

  const [search, setSearch] =
    useState(initialSearch);

  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory);

  const [currentPage, setCurrentPage] =
    useState(initialPage);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        product.category?.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "all"
          ? true
          : product.category?.name ===
            selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [
    products,
    search,
    selectedCategory,
  ]);

  const totalPages = Math.ceil(
    filteredProducts.length /
      PRODUCTS_PER_PAGE
  );

  const paginatedProducts =
    filteredProducts.slice(
      (currentPage - 1) *
        PRODUCTS_PER_PAGE,
      currentPage *
        PRODUCTS_PER_PAGE
    );

  const updateUrl = (
    q: string,
    category: string,
    page: number
  ) => {
    const params =
      new URLSearchParams();

    if (q) {
      params.set("q", q);
    }

    if (
      category &&
      category !== "all"
    ) {
      params.set(
        "category",
        category
      );
    }

    params.set(
      "page",
      page.toString()
    );

    router.push(
      `/products?${params.toString()}`
    );
  };

  const handleSearchChange = (
    value: string
  ) => {
    setSearch(value);
    setCurrentPage(1);

    updateUrl(
      value,
      selectedCategory,
      1
    );
  };

  const handleCategoryChange = (
    value: string
  ) => {
    setSelectedCategory(value);
    setCurrentPage(1);

    updateUrl(
      search,
      value,
      1
    );
  };

  const handlePageChange = (
    page: number
  ) => {
    setCurrentPage(page);

    updateUrl(
      search,
      selectedCategory,
      page
    );
  };

  return (
    <>
      <SearchAndFilters
        search={search}
        selectedCategory={
          selectedCategory
        }
        categories={categories}
        onSearchChange={
          handleSearchChange
        }
        onCategoryChange={
          handleCategoryChange
        }
      />

      <ProductsGrid
        products={
          paginatedProducts
        }
      />

      <Pagination
        currentPage={
          currentPage
        }
        totalPages={
          totalPages
        }
        onPageChange={
          handlePageChange
        }
      />
    </>
  );
}