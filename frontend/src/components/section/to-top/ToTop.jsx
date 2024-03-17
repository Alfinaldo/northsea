import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 3000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Membuat animasi scroll
    });
  };

  return (
    <>
      {isVisible ? (
        <div className=" bg-slate-700 inline-block p-2 rounded-full cursor-pointer active:bg-slate-900 bottom-[50px] fixed right-5">
          <GoMoveToTop
            onClick={scrollToTop}
            className=" text-[#f9f9f9] text-2xl sm:text-3xl md:text-3xl lg:text-3xl  "
          />
        </div>
      ) : null}
    </>
  );
};

export default ToTop;
