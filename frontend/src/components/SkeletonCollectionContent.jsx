import ContentLoader from "react-content-loader";

const SkeletonCollectionContent = () => {
  return (
    <div className=" skeleton-collection flex justify-between items-center gap-3 min-h-screen p-5 border border-slate-950">
      <div className="left w-1/2 mx-auto">
        <ContentLoader
          speed={2}
          width={"100%"}
          height={385}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <defs>
            <clipPath id="clipRight">
              <rect x="-500" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>

          <rect x="0" y="0" rx="16" ry="16" width="100%" height="100%" />
        </ContentLoader>
      </div>
      <div className="right w-1/2 my-3 mx-auto">
        <ContentLoader
          speed={2}
          width={"100%"}
          height={385}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <defs>
            <clipPath id="clipRight">
              <rect x="-500" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>

          <rect x="0" y="13" rx="4" ry="4" width="100" height="9" />
          <rect x="0" y="29" rx="4" ry="4" width="100" height="9" />
          <rect x="0" y="50" rx="4" ry="4" width="100%" height="10" />
          <rect x="0" y="65" rx="4" ry="4" width="100%" height="10" />
          <rect x="0" y="79" rx="4" ry="4" width="200" height="10" />
          <rect x="0" y="100" rx="5" ry="5" width="100%" height="200" />
          <rect x="0" y="310" rx="5" ry="5" width="100%" height="70" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default SkeletonCollectionContent;
