// ✅ Server Component — metadata works here
import ProductPageClient from './ProductPageClient';

export const metadata = {
  title: 'Our Products | Satpal & Sons',
  description:
    'Browse our wide range of premium steel products including roofing sheets, MS sheets, TMT bars, and more.',
};

export default function ProductPage() {
  return <ProductPageClient />;
}
