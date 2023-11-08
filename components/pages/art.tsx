import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Art = () => (
  <section className="text-yellow-500">
    <h2>Art</h2>
    <div className="w-full">
      <Swiper
        slidesPerView="auto"
      >
        <SwiperSlide>Art 1</SwiperSlide>
        <SwiperSlide>Art 2</SwiperSlide>
        <SwiperSlide>Art 3</SwiperSlide>
        <SwiperSlide>Art 4</SwiperSlide>
      </Swiper>

    </div>
  </section>
);

export default Art;
