"use client";

import Header from "./Header";
import Footer from "./Footer";
import SmoothScroll from "./primitives/SmoothScroll";
import PageTransition from "./primitives/PageTransition";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Header />
      <main id="main" className="pt-[72px] md:pt-[80px]">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
