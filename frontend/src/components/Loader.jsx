import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <>
      <div className="loader flex justify-center items-center min-h-screen">
        <img src={loader} alt="" />
      </div>
    </>
  );
};

export default Loader;
