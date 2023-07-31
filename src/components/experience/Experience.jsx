import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'

const Experience = () => {

  const [experienceFE, setExperienceFE] = useState([]);
  const [experienceBE, setExperienceBE] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get fetch projects from firebase
    const db = getFirestore();
    const itemsCollection = collection(db, "frontEndSkills");
    const itemsCollection2 = collection(db, "backEndSkills")
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setExperienceFE(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
    getDocs(itemsCollection2).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setExperienceBE(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }
    );
  }, []);

  return (
    <>
      <section id="experience">
        <h5>My Skills</h5>
        <h2>Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {
                loading ?
                  (
                    <Spinner className='spinner' animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) :
                  experienceFE.map((skill) => {
                    return (
                      <article key={skill.id} className="experience__details">
                        <BsFillCheckCircleFill className="experience__details-icon" />
                        <div>
                          <h4>{skill.name}</h4>
                          <small className="text-light">{skill.experience}</small>
                        </div>
                      </article>
                    )
                  })

              }
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              {
                loading ? (
                  <Spinner className='spinner' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) :
                  experienceBE.map((skill) => {
                    return (
                      <article key={skill.id} className="experience__details">
                        <BsFillCheckCircleFill className="experience__details-icon" />
                        <div>
                          <h4>{skill.name}</h4>
                          <small className="text-light">{skill.experience}</small>
                        </div>
                      </article>
                    )
                  })
              }
            </div>
          </div>
        </div>

      </section>
    </>

  );
};

export default Experience;
