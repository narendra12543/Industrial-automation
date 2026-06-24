import { getActiveCategories } from "@/actions/products";
import ProductForm from "./ProductForm";

export default async function CreateProductPage() {
  const categories = await getActiveCategories();

  return <ProductForm categories={categories} />;
}