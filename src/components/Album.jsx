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

const Album = ({ handleClose, selected }) => {
  const images = [];
  const thumbs = [];
  const ImageUrl = process.env.PUBLIC_URL + "/images/";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  for (let i = 1; i <= 12; i++) {
    images.push(
      <SwiperSlide key={`studio_${i}`}>
        <img
          src={ImageUrl + `studio/${i}.jpg`}
          alt={`studio_${i}`}
          loading="lazy"
        />
      </SwiperSlide>
    );

    thumbs.push(
      <SwiperSlide key={`studio_${i}`}>
        <img
          className="thumb-img"
          src={ImageUrl + `thumb/${i}.jpg`}
          alt={`studio_${i}`}
          loading="lazy"
        />
      </SwiperSlide>
    );
  }

  const pagination = {
    clickable: true,
    renderBullet: function (i, name) {
      return '<span class="' + name + '">' + (i + 1) + "</span>";
    },
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <Swiper
          slidesPerView={1}
          initialSlide={selected}
          spaceBetween={20}
          centeredSlides={true}
          className="album-swiper"
          pagination={pagination}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          initialSlide={selected}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {thumbs}
        </Swiper>

        <div className="modal-close" onClick={handleClose}>닫기</div>

      </div>
    </div>
  );
};

export default Album;
