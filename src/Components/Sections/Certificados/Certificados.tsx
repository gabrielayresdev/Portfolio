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
          <Certificado
            href="https://cursos.alura.com.br/degree/certificate/87eed6c0-acd1-43dd-a60c-fe872fa49900?lang=pt_BR"
            src={c1}
            alt="Curso de HTML e CSS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Certificado
            href="https://www.origamid.com/certificate/d643d905"
            src={c2}
            alt="Curso de JavaScript"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Certificado
            href="https://www.origamid.com/certificate/764cb070"
            src={c3}
            alt="Curso de React completo"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Certificados;
