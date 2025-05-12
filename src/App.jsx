import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/CompanyFeatures";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";
import Feature from "./components/ChooseUs";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <TrustedBy/>
      <Feature/>
      <Features />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
