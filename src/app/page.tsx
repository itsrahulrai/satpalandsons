import React from 'react';
import {
  mockCategories,
  ProductData

} from '@/lib/mockData';


// Page Components
import ProductCategories from '@/components/ProductCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutCompany from '@/components/AboutCompany';
import HeroBanner from '@/components/HeroBanner';
import TopBar from '../components/TopBar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';




export const metadata = {
  title: 'SATPAL AND SONS - Steel Products',
  description: 'Your trusted partner for high-quality steel products, including roofing sheets, MS structures, and more. Get a quote today!',
};

export default function HomePage() {
  return (
    <>
     <TopBar />
              <MainNavbar />
            
             
      <HeroBanner />
      <ProductCategories categories={mockCategories} /> 
      <AboutCompany />
     <FeaturedProducts products={ProductData} />
       <Footer />
    </>
  );
}
