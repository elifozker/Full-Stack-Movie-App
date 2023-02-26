import { useEffect } from "react";
import { useState } from "react";
import "../styles/Carousel.css";
import axios from "axios";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchAllWallpapers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/wallpapers")
        setWallpapers(res.data);
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchAllWallpapers();
  }, []);


  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === wallpapers.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? wallpapers.length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {wallpapers.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.wallpapperlink} alt="" />
              <div className="description">
                <div className="desc-container">

                  <h1 className="desc-title">{image.movieTitle}</h1>

                  <h1 className="desc-desc">{image.movieDesc}</h1>

                </div>

              </div>
            </div>
          );
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {wallpapers.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;