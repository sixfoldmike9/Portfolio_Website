import Navbar from "./components/NavBar";

import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";

import TechStack from "./sections/TechStack";

import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
