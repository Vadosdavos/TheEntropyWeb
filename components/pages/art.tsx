import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Art = () => (
  <section>
    <h2>Art</h2>
    <div>
      <Swiper
        slidesPerView="auto"
      >
        <SwiperSlide><div style={{ background: "red", opacity: 0.5, height: "20vh" }}>Art 1</div></SwiperSlide>
        <SwiperSlide><div style={{ background: "blue", opacity: 0.5, height: "20vh" }}>Art 2</div></SwiperSlide>
        <SwiperSlide><div style={{ background: "green", opacity: 0.5, height: "20vh" }}>Art 3</div></SwiperSlide>
        <SwiperSlide><div style={{ background: "white", opacity: 0.5, height: "20vh" }}>Art 4</div></SwiperSlide>
      </Swiper>

    </div>
  </section>
);

export default Art;
