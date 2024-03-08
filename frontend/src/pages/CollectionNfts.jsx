import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import HomepagesCollectionNfts from "../components/HomepagesCollectionNfts";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataNfts, clearData } from "../app/features/DatasNftsSlice";
import { darkMode } from "@/context/ContextProvider";

//! ini kalo ga pake redux *//
// const CollectionNfts = () => {

//     const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_OPENSEA;

//     const { collectionId } = useParams()

//     const [datas, setDatas] = useState([])
//     const [showLoader, setShowLoader] = useState(true)

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://api.opensea.io/api/v2/collection/${collectionId}/nfts`, {
//                     headers : {
//                         'Accept': 'application/json',
//                         'X-API-KEY': apiKey,
//                     }
//                 })
//                 const nftsArray = response.data?.nfts || []
//                 const banner = {
//                     banner : 'hihi',
//                 }
//                 const updateDatas = {...banner, nfts : nftsArray}
//                 setDatas(updateDatas)
//                 setShowLoader(false)
//             } catch (error) {
//                 console.error('Error fetching data:', error.response?.data || error.message);

//             }
//         }
//         fetchData()
//     }, [collectionId, apiKey])

//     console.log(datas)

//   return (
//     <>
//         <Navbar />
//         {showLoader ? (
//             <Loader />
//         ) : (
//             <HomepagesCollectionNfts />
//         )}
//     </>
//   )
// }

// export default CollectionNfts

//* ini pake redux //
const CollectionNfts = () => {
  const dispatch = useDispatch();
  const { collectionId } = useParams();
  const { isDarkMode } = useContext(darkMode);

  const { showLoader } = useSelector((state) => state.datas_Nft);
  // console.log(showLoader)
  // const datas = useSelector((state) => state.datas_Nft?.data)
  // console.log(datas)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchDataNfts(collectionId));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    dispatch(clearData());

    // return () => {
    //     dispatch(clearData());
    // }
  }, [dispatch, collectionId]);

  return (
    <>
      <Navbar />
      {showLoader ? <Loader /> : <HomepagesCollectionNfts />}
    </>
  );
};

export default CollectionNfts;
