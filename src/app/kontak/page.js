'use client';

import { Suspense } from "react";
import Footer from "../components/Footer";
import KontakComponent from "../components/kontak";
import Navbar from "../components/navbar";

const kontak = () => {
  return (
    <>
  <Navbar/>
  <Suspense fallback={null}>
  <KontakComponent/>
  </Suspense>
  <Footer/>
    </>
  );
};

export default kontak;