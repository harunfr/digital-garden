import React, { useRef, useState } from "react";
import uuid from "react-uuid";
// https://source.unsplash.com/random/

const LoadMoreImg = () => {
  const [imageSrc, setImageSrc] = useState(
    `https://source.unsplash.com/random/${parseInt(
      300 + Math.random() * 100
    )}x${parseInt(300 + Math.random() * 100)}`
  );

  const handleLoading = () => {};

  return (
    <div className="load-more">
      {Array.apply(null, Array(15))
        .map(() => {})
        .map((el) => {
          return <img key={uuid()} className="load-more-img" src={imageSrc} />;
        })}

      {/* <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} />
      <img className="load-more-img" src={src.current} /> */}
      <button className="load-more-btn" onClick={handleLoading}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreImg;
