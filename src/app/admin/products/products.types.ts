import { Category } from "@/app/admin//categories/categories.types";

export type ProductWithCategory = {
  category: Category;
  created_at: string;
  heroImage: string;
  id: number;
  imagesUrl: string[];
  maxQuantity: number;
  price: number | null;
  slug: string;
  title: string;
};

export type ProductsWithCategoriesResponse = ProductWithCategory[];

export type UpdateProductSchema = {
  title: string;
  category: number;
  price: number;
  maxQuantity: number;
  heroImage: string;
  imagesUrl: string[];
  slug: string;
};
