import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { selectCollectionById } from "../app/features/DatasNftsSlice"
import { useContext, useEffect } from "react";
import { fetchDataNfts } from "../app/features/DatasNftsSlice";
import DetailComponentContent from "../components/DetailComponentContent";
import SkeletonCollectionContent from "../components/SkeletonCollectionContent";
import Footer from "@/components/section/footer/Footer";
import { darkMode } from "@/context/ContextProvider";

const DetailCollection = () => {
  const dispath = useDispatch();
  const { collectionId } = useParams();
  const { isDarkMode } = useContext(darkMode);

  const { showLoader } = useSelector((state) => state.datas_Nft);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispath(fetchDataNfts(collectionId));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispath, collectionId]);

  return (
    <>
      <div className={isDarkMode ? " bg-[#121212]" : null}>
        <Navbar />
        {showLoader ? (
          <SkeletonCollectionContent />
        ) : (
          <DetailComponentContent />
        )}
        <Footer />
      </div>
    </>
  );
};

export default DetailCollection;
