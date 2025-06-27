import { Metadata } from "next";
import FilteredProductPageClient from "./FilteredProductPageClient";
import { ProductData } from "../../../lib/mockData";

// Generate dynamic metadata based on slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug).replace(/-/g, " ");
  const categoryName = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1);

  const matchingProduct = ProductData.find((product) =>
    product.name.toLowerCase().includes(categoryName.toLowerCase())
  );

  return {
    title: matchingProduct
      ? `${matchingProduct.name} | Satpal & Sons`
      : `Products | Satpal & Sons`,
    description: matchingProduct
      ? `Explore premium quality ${matchingProduct.name} for your industrial needs.`
      : `Browse our wide range of steel products.`,
  };
}

export default function FilteredProductPage({ params }: { params: { slug: string } }) {
  return <FilteredProductPageClient slug={params.slug} />;
}
