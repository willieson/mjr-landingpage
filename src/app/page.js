import Head from "next/head";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


const Home = () => {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://mitrajayaraya.com/" />
    </Head>
    <Navbar/>
    <Hero/>
    <Footer/>
    
    </>
  );
};

export default Home;