import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  const datas1 = useSelector((state) => state.datas_remelio.data);
  const datas2 = useSelector((state) => state.datas_killabears.data);
  const datas3 = useSelector((state) => state.datas_goblin.data);
  const datas4 = useSelector((state) => state.datas_pudgypenguins.data);
  const datas5 = useSelector((state) => state.datas_wassies.data);
  const datas6 = useSelector((state) => state.datas_shrapnel.data);
  const datas7 = useSelector((state) => state.datas_rocks.data);

  return (
    <div className=" carousel mt-[63px] py-5 h-full w-full sm:mt-[63px] md:mt-[73px]">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={datas1.banner_image_url}
            className=" h-[250px] w-[90%] mx-auto object-cover rounded-[16px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={datas2.banner_image_url}
            className=" h-[250px] w-[90%] mx-auto object-cover rounded-[16px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={datas3.banner_image_url}
            className=" h-[250px] w-[90%] mx-auto object-cover rounded-[16px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={datas4.banner_image_url}
            className=" h-[250px] w-[90%] mx-auto object-cover rounded-[16px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={datas5.banner_image_url}
            className=" h-[250px] w-[90%] mx-auto object-cover rounded-[16px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={datas6.banner_image_url}
            className=" h-[250px] w-[90%] mx-auto object-cover rounded-[16px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={datas7.banner_image_url}
            className=" h-[250px] w-[90%] mx-auto object-cover rounded-[16px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
