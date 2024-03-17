import ContentLoader from "react-content-loader";

const SkeletonLoader = () => {
  return (
    <div className="sekeleton-wrapper flex justify-between items-center gap-7">
      <div className="left my-3 w-full ">
        <ContentLoader
          speed={2}
          width={"100%"}
          height={385}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <defs>
            <clipPath id="clipRight">
              <rect x="70" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>

          {/* First skeleton */}
          <circle cx="30" cy="30" r="30" />
          <rect
            x="0"
            y="5"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Second skeleton */}
          <circle cx="30" cy="110" r="30" />
          <rect
            x="0"
            y="85"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Third skeleton*/}
          <circle cx="30" cy="190" r="30" />
          <rect
            x="0"
            y="165"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Fourth skeleton */}
          <circle cx="30" cy="270" r="30" />
          <rect
            x="0"
            y="245"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Fifth skeleton */}
          <circle cx="30" cy="350" r="30" />
          <rect
            x="0"
            y="325"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />
        </ContentLoader>
      </div>
      <div className="right my-3 w-full hidden md:block">
        <ContentLoader
          speed={2}
          width={"100%"}
          height={385}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <defs>
            <clipPath id="clipRight">
              <rect x="70" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>

          {/* First skeleton */}
          <circle cx="30" cy="30" r="30" />
          <rect
            x="0"
            y="5"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Second skeleton */}
          <circle cx="30" cy="110" r="30" />
          <rect
            x="0"
            y="85"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Third skeleton*/}
          <circle cx="30" cy="190" r="30" />
          <rect
            x="0"
            y="165"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Fourth skeleton */}
          <circle cx="30" cy="270" r="30" />
          <rect
            x="0"
            y="245"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />

          {/* Fifth skeleton */}
          <circle cx="30" cy="350" r="30" />
          <rect
            x="0"
            y="325"
            rx="3"
            ry="3"
            width="100%"
            height="50"
            clipPath="url(#clipRight)"
          />
        </ContentLoader>
      </div>
    </div>
  );
};

export default SkeletonLoader;
