import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import profilePic1 from "../../assets/img/profile1.jpg";
import profilePic2 from "../../assets/img/profile2.jpg";
import profilePic3 from "../../assets/img/profile3.jpg";
import profilePic4 from "../../assets/img/profile4.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../theme/Context";
const clients = [
  {
    img: profilePic1,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  },
  {
    img: profilePic2,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  },
  {
    img: profilePic3,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  },
  {
    img: profilePic4,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  },
];
function Testimonial() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className="testimonial" id="Testimonials">
      <div className="heading pt-8">
        <span className={ theme !== "light" && "text-white"}>Clients always get </span>
        <span className="bg-gradient-to-r font-black from-pink  via-blue to-pink inline-block text-transparent bg-clip-text">
          Exceptional Work{" "}
        </span>
        <span className={ theme !== "light" && "text-white"}> from me...</span>
      </div>
      <div className="testimonial-swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true} // Enable navigation arrows
        pagination={{ clickable: true }} // Enable clickable pagination
        spaceBetween={30}
        slidesPerView={1}
        className="testimonial-swiper"
      >
        {clients.map((client, index) => (
          <SwiperSlide className="testimonial-slide" key={index}>
            <div className="testimonial-content">
              <img src={client.img}></img>
              <span className="mt-6">{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
