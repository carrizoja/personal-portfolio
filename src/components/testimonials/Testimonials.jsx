import React from "react";
import "./testimonials.css";
import { useState, useEffect } from 'react'
import {getFirestore,collection, getDocs} from 'firebase/firestore' 
import Spinner from 'react-bootstrap/Spinner'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get fetch projects from firebase
    const db = getFirestore();
    const itemsCollection = collection(db, "testimonials");
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setTestimonials(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      setLoading(false);
    });
  }, []);

  return (
    <>
    {
      loading ? 
      (
        <Spinner className='spinner' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
      )
      :


    <section className="testimonialsId" id="testimonials">
      <h5>What my clients say of me</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        
        {
          testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id} className="testimonial">
              <div className="client__avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <h5 className="client__name">{testimonial.name}</h5>
              <h6 className="client__profession">{testimonial.profession}</h6>
              <small className="client__review">
                {testimonial.review}
              </small>
            </SwiperSlide>
            )
          })
        }      
      </Swiper>
    </section>

    }
    </>
  );
};

export default Testimonials;
