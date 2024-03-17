import AnimHeader from "./AnimHeader";
import TextAnimation from "./TextAnimation";

const HeaderContent = () => {
  return (
    <div className=" flex items-center headerr">
      <div className=" w-full text-center">
        <TextAnimation />
      </div>
      <div className=" w-full">
        <AnimHeader />
      </div>
    </div>
  );
};

export default HeaderContent;
