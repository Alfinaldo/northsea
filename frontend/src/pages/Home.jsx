import { useContext } from "react";
import { darkMode } from "../context/ContextProvider";
// import About from "../components/About";
import CardMenu from "../components/CardMenu";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CryptoNews from "../components/section/cryptoNews/CryptoNews";
import NftsNews from "../components/section/NftsNews";
import Carousel from "../components/section/carousel/Carousel";
import Footer from "../components/section/footer/Footer";

const Home = () => {
  const { isDarkMode } = useContext(darkMode);
  return (
    <div
      className={
        isDarkMode ? " bg-[#121212] text-[#f9f9f9]" : " text-[#363636]"
      }
    >
      <Navbar />
      <Carousel />
      <Header />
      <CardMenu />
      <CryptoNews />
      <NftsNews />
      <Footer />
    </div>
  );
};

export default Home;
