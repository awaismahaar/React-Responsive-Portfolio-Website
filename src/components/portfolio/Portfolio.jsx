import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Add CSS if using pagination or any feature
import { Pagination } from "swiper/modules";
import sidebar from "../../assets/img/sidebar.png"
import ecommerce from "../../assets/img/ecommerce.png"
import hoc from "../../assets/img/hoc.png"
import musicapp from "../../assets/img/musicapp.png"
import { useContext } from "react";
import { ThemeContext } from "../../theme/Context";

function Portfolio() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className="portfolio" id="Portfolio">
        <span className={ theme !== "light" && "text-white"}>Recent Projects</span>
        <span className={ theme !== "light" && "text-white"}>Portfolio</span>
    <Swiper pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={30} slidesPerView={3} grabCursor={true} className="my-swiper">
      <SwiperSlide className="my-swiper-slide">
        <img src={sidebar} alt="sidebar" />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <img src={ecommerce} alt="ecommerce" />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <img src={hoc} alt="hoc" />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <img src={musicapp} alt="hoc" />
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Portfolio