
import { Metadata } from "next";
import FilteredProductPageClient from "./FilteredProductPageClient";
import { ProductData } from "../../../lib/mockData";


type Props = {
  params: Promise<{ slug: string }>
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}



export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = (await params).slug

  const decodedSlug = decodeURIComponent(slug).replace(/-/g, " ");
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

// Page component with correct typing
export default async function FilteredProductPage({ params }: Props) {
  const slug = (await params).slug
  return <FilteredProductPageClient slug={slug} />;
}
