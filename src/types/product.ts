export interface ProductType {
  id: string;
  name: string;
  slug: string;

  shortDescription?: string | null;

  featured: boolean;

  category?: {
    name: string;
  } | null;

  images?: {
    imageUrl: string;
  }[];
}