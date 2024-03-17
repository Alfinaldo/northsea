import { darkMode } from "@/context/ContextProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CollectionContentNfts from "./CollectionContentNfts";

const HomepagesCollectionNfts = () => {
  const { collectionId } = useParams();

  const { isDarkMode } = useContext(darkMode);

  let selectImage;
  if (collectionId === "goblintownwtf") {
    selectImage = (
      <img
        src="https://lh3.googleusercontent.com/U1IY0rRHvXZ9K7fqDgBBJVnkJhlv0YrL0aMfYzY4XzTkWGyWroq8-GymDy_1e3S17Ze_FPIwg9yjheKxp42SSzUBrp_744yrA16XHKo=s2500"
        alt=""
      />
    );
  } else if (collectionId === "parallelplanetfall") {
    selectImage = (
      <img
        src="https://raw.seadn.io/files/0ee15d5be6f3ba0f56947cac670dcc66.png"
        alt=""
      />
    );
  } else if (collectionId === "theplooshies") {
    selectImage = (
      <img
        src="https://i.seadn.io/gcs/files/3be881828a6509d5dfeb353475d33593.png?auto=format&dpr=1&w=1200"
        alt=""
      />
    );
  } else if (collectionId === "lilpudgys") {
    selectImage = (
      <img
        src="https://i.seadn.io/gcs/files/ff12374123ac5e8571b01d03874e8a76.png?auto=format&dpr=1&w=3840"
        alt=""
      />
    );
  } else if (collectionId === "sappy-seals") {
    selectImage = (
      <img
        src="https://openseauserdata.com/files/3332005494829492fc427e9f0e5fae71.png"
        alt=""
      />
    );
  } else if (collectionId === "aod-dinosty") {
    selectImage = (
      <img
        src="https://i.seadn.io/s/primary-drops/0xf4ecc1c74d120649f6598c7a217abaffdf76cd4f/31344088:about:media:b888b4b0-350e-4cf3-ae09-96e322bc9609.jpeg?auto=format&dpr=1&w=3840"
        alt=""
      />
    );
  } else if (collectionId === "shrapnel-operators-collection") {
    selectImage = (
      <img
        src="https://openseauserdata.com/files/83962fe64af2be1f30f4703eeb8e23d4.png"
        alt=""
      />
    );
  } else if (collectionId === "wassiesbywassies") {
    selectImage = (
      <img
        src="https://lh3.googleusercontent.com/z99Mq4GemeVwWhEokVdmF8YIKtVcpnAIQ8e8XtIRZEOpCSOcTmOuSLV0dJZtmBe0QGuIDa2Tg95hn6KEejmuZcqoS6nbobxwH4HITA=s2500"
        alt=""
      />
    );
  } else if (collectionId === "pudgypenguins") {
    selectImage = (
      <img
        src="https://openseauserdata.com/files/8a26e3de0f309089cbb1e5ab969fc0bc.png"
        alt=""
      />
    );
  } else if (collectionId === "tom-sachs-mars-rocks") {
    selectImage = (
      <img
        src="https://lh3.googleusercontent.com/l1h-JwBiULRHpUtxcTsqGXGXdIU3gJApjwdDRfG1CenXcB2rbLeGNTbOyglit043h1YuHrrEaU9HJyHoA_b7mdQhzQkX7LO7orXAIF8=s2500"
        alt=""
      />
    );
  } else {
    selectImage = (
      <p className=" text-xs text-center italic">Image Not Found...</p>
    );
  }

  return (
    <>
      <div
        className={
          isDarkMode
            ? "homepages mt-[69px] bg-[#121212]"
            : "homepages mt-[73px] "
        }
      >
        {selectImage}
        <CollectionContentNfts />
      </div>
    </>
  );
};

export default HomepagesCollectionNfts;
