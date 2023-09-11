import styles from "./Certificados.module.sass";

import { Swiper, SwiperSlide } from "swiper/react";
import c1 from "../../../assets/certificados/c1.png";
import c2 from "../../../assets/certificados/c2.png";
import c3 from "../../../assets/certificados/c3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Certificado from "./Certificado";

const Certificados = () => {
  return (
    <section className={styles.certificados + " container"} id="certificados">
      <h2 className={styles.title}>Diplomas e certificados</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={`mySwiper ${styles.carousel}`}
      >
        <SwiperSlide>
          <Certificado href="" src={c1} alt="Curso de HTML e CSS" />
        </SwiperSlide>
        <SwiperSlide>
          <Certificado href="" src={c2} alt="Curso de JavaScript" />
        </SwiperSlide>
        <SwiperSlide>
          <Certificado href="" src={c3} alt="Curso de React completo" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Certificados;
