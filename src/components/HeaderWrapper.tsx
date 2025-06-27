// src/components/HeaderWrapper.tsx
'use client';
import { useState } from 'react';
import MainNavbar from './MainNavbar';
import TopBar from './TopBar'; // TopBar can still be a server component, so no 'use client' here.

export default function HeaderWrapper() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <TopBar />
      <MainNavbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
    </>
  );
}

// Then in layout.tsx:
// import HeaderWrapper from '../components/HeaderWrapper';
// ...
// <HeaderWrapper /> // instead of TopBar and MainNavbar directly