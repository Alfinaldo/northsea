import { useContext, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { darkMode } from "../context/ContextProvider";

const TextAnimation = () => {
  const { isDarkMode } = useContext(darkMode);
  const [textColor, setTextColor] = useState("peru");

  const typeAnim = (
    <TypeAnimation
      sequence={[
        "lorem ipsum",
        500,
        () => setTextColor("peru"),

        "",
        500,
        () => setTextColor("lightseagreen"),

        "lorem lorem",
        500,
        () => setTextColor("lightseagreen"),
        "",

        500,
        () => setTextColor("blueviolet"),

        "ipsum ipsum",
        500,
        () => setTextColor("blueviolet"),

        "",
        500,
        () => setTextColor("peru"),
      ]}
      repeat={Infinity}
    />
  );

  return (
    <div className=" p-5">
      <h3
        className={
          isDarkMode
            ? "font-semibold text-[#f9f9f9] text-3xl"
            : " font-semibold text-[#363636] text-3xl "
        }
      >
        Lorem ipsum dolor sit amet <br /> aperiam quas?
      </h3>
      <h5 className=" font-medium text-lg" style={{ color: textColor }}>
        {typeAnim}
      </h5>
      <p
        className={
          isDarkMode ? "text-[#f9f9f99d] text-lg" : " text-[#363636] text-lg"
        }
      >
        Bored Of Apes? Try Something New.
      </p>
      <div className="btn"></div>
    </div>
  );
};

export default TextAnimation;
