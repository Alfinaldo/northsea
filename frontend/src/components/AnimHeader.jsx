import { useSelector } from "react-redux";

const AnimHeader = () => {
  const datas = useSelector((state) => state.datas_remelio?.data);

  return (
    <div className=" p-6 sm:p-4 md:p-4 lg:p-4">
      <img
        src={datas.image_url}
        className=" w-[80%] mx-auto sm:w-1/2 md:w-1/2 lg:w-1/2"
      />
    </div>
  );
};

export default AnimHeader;
