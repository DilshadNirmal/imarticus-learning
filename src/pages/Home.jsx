import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import WebView from "../components/WebView";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WebView />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
