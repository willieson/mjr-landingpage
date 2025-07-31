import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export const metadata = {
  alternates: {
    canonical: "https://mitrajayaraya.com/",
  },
}

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Footer/>
    
    </>
  );
};

export default Home;