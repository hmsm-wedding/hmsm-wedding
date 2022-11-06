import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Album = ({ handleClose }) => {
  const images = [];
  const thumbs = [];
  const ImageUrl = process.env.PUBLIC_URL + "/images/";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  for (let i = 1; i <= 12; i++) {
    images.push(
      <SwiperSlide key={`film_${i}`}>
        <img
          src={ImageUrl + `studio/${i}.JPG`}
          alt={`film_${i}`}
          loading="lazy"
        />
      </SwiperSlide>
    );

    thumbs.push(
      <SwiperSlide key={`film_${i}`}>
        <img
          className="thumb-img"
          src={ImageUrl + `thumb/${i}.JPG`}
          alt={`film_${i}`}
          loading="lazy"
        />
      </SwiperSlide>
    );
  }
  const pagination = {
    clickable: true,
    renderBullet: function (i, name) {
      // return `<div style={width: '10px'} className=${name}>
      //   <img src=${ImageUrl + `studio/${i+1}.JPG`} alt=${`film_${i+1}`} loading='lazy'/>
      // </div>`;
      return '<span class="' + name + '">' + (i + 1) + "</span>";
    },
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <div onClick={handleClose}>닫기</div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          className="album-swiper"
          pagination={pagination}
          // modules={[Pagination]}
          // navigation={true}

          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          // loop={true}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {thumbs}
        </Swiper>
      </div>
    </div>
  );
};

export default Album;
