import React from "react";
import "./testimonials.css";
import sofiAvatar from "../../assets/sofiAvatar.png";
import juanmaAvatar from "../../assets/juanmaAvatar.jpg";
import alegut from "../../assets/alegut.jpg";
import luzAvatar from "../../assets/luz.jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: sofiAvatar,
    name: "Sofi Ceria",
    profession: 'Baker',
    review:'José siempre está predispuesto a colaborar con el cliente, tiene un trato muy cordial y respetuoso. Muy paciente y resolutivo con cualquier problema que se presente.'
  },
  {
    avatar: juanmaAvatar,
    name: "Juan Manuel Marchevsky",
    profession: 'Community Manager',
    review:'Gran compañero, súper responsable, metódico y siempre en la primera fila para poder resolver los problemas. Todos necesitamos un José en nuestra empresa!'
  },
  {
    avatar: alegut,
    name: "Alejandro Gutierrez",
    profession: 'CEO of Lobogut Estudio',
    review:'José es muy profesional, prolijo y sobre todo muy ordenado para trabajar. Además de su buena predisposición posee mucho conocimiento sobre desarrollo y IT. Es muy recomendable!!'
  },
  {
    avatar: luzAvatar,
    name: "Luz Squarzon",
    profession: 'Senior Analist QA',
    review:'José es un valioso profesional. Ha interpretado mí proyecto y fue un pilar importante para llegar a producción. Es curioso, responsable y excelente jugador en equipo.'
  }

] 

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What my clients say of me</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
  
        {
          data.map(({avatar, name, profession, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <h6 className="client__profession">{profession}</h6>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }      
      </Swiper>
    </section>
  );
};

export default Testimonials;
