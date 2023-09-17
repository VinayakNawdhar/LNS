import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import cardImg1 from "./assets/card-img-1.webp";
import cardImg2 from "./assets/card-img-2.webp";
import nandini from './assets/nandiniMaam.png'
import sumanth from './assets/sumanthsir.jpg'
import "./App.css";
import "./resp.css";
const App = () => {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //       el: document.querySelector('.main'),
  //       smooth: true
  //   });
  // })
  return (
    <div className="main">
      <Navbar />
      <section id="section-1" className="section--1">
        <h1>
          '' Nurturing agriculture, one innovation at a time, because the heart
          of a farm beats in the health and happiness of its cattle. ''
        </h1>
        <img src={img1} alt="" />
      </section>
      <section className="section--2">
        <div className="card">
          <img src={cardImg1} alt="" />
          <div>
            <h1>Caring for Farmers and Livestock</h1>
            <p>
              Rooted in love for the earth and its caretakers, we prioritise the
              well-being of both farmers and their farm animals.
            </p>
          </div>
        </div>
        <div className="card card-2">
          <img src={cardImg2} alt="" />
          <div>
            <h1>Pioneering the Future of Agriculture</h1>
            <p>
              Our dedication to innovation steers us towards new approaches,
              transforming the agricultural world for the better.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={img2} className="img-2" alt="" />
          <div>
            <h1>Recognition</h1>
            <p>
              Acknowledged by NaaVIC India, our efforts to revolutionize
              agriculture and livestock welfare have not only made waves, but
              have galvanized a new generation of farming practices.
            </p>
          </div>
        </div>
      </section>
      <section id="section-2" className="section--3">
        <h1>Innovations</h1>
        <div className="product">
          <h1>DAIRY FRIEND</h1>
          <img
            src="https://images.unsplash.com/photo-1561043394-9f7d16d9ae37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut,
            odit porro, sapiente rerum perferendis nostrum officiis ullam autem
            suscipit minima atque rem quia? Possimus doloremque temporibus
            laboriosam animi molestias, blanditiis omnis ea molestiae enim rem
            facere asperiores tenetur? Eligendi nobis ducimus placeat earum,
            quae quidem perferendis architecto incidunt quaerat?
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="product">
          <h1>PLASTIC COW</h1>
          <img
            src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut,
            odit porro, sapiente rerum perferendis nostrum officiis ullam autem
            suscipit minima atque rem quia? Possimus doloremque temporibus
            laboriosam animi molestias, blanditiis omnis ea molestiae enim rem
            facere asperiores tenetur? Eligendi nobis ducimus placeat earum,
            quae quidem perferendis architecto incidunt quaerat?
          </p>
          <a href="#">Learn more</a>
        </div>
      </section>
      <section className="section--4">
        <h1>About - Us</h1>
        <div className="about">
          <h2>
           Welcome to LNS Farmer Info LLP - Pioneering Agriculture and Cattle
            Welfare, Recognized by NaaVIC India
          </h2>
          <p>
            LNS Farmer Info LLP is an agricultural and livestock-centric
            enterprise founded in 2021 by the visionary duo, Dr. C Nandini and
            Mr. Shiva Sumanth Reddy. Rooted in a profound love for the land and its
            caretakers, we are dedicated to enhancing the well-being of farmers
            and their cherished livestock companions. Our journey is marked by
            innovation and compassion, driven by a mission to redefine modern
            farming practices. We are proud to announce that we have been
            officially recognized by the National Association for the
            Advancement of Veterinary Informatics and Computational (NAAVIC)
            India for our exceptional contributions to agriculture and livestock
            welfare.
          </p>
        </div>
        <div className="co-founders">
          <h1>Co-Founders</h1>
          <div className="container">
            <div className="co-founder">
              <img src={nandini} alt="" />
              <h2>Dr. C Nandini</h2>
              <p>Vice-Principal | HOD CSE-AI, DSATM</p>
              <div className="line"></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius autem maxime, distinctio ad ullam dolorum voluptatum dolore placeat, optio minima maiores, obcaecati excepturi! Repellat neque repellendus tempore quaerat nihil eius aliquid, aspernatur doloremque aperiam!</p>
            </div>
            <div className="co-founder">
              <img src={sumanth} alt="" />
              <h2>Shiva Sumanth Reddy</h2>
              <p>Asst. Professor, Dept. of CSE,DSATM</p>
              <div className="line"></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius autem maxime, distinctio ad ullam dolorum voluptatum dolore placeat, optio minima maiores, obcaecati excepturi! Repellat neque repellendus tempore quaerat nihil eius aliquid, aspernatur doloremque aperiam!</p>
            </div>
          </div>
        </div>
        <div className="team">
          <h2>Our Team</h2>
          <div className="team-member">
            <h3>- <span>Vinayak Nawdhar</span> | Developer | vinayaknawdhar003@gmail.com</h3>
            <h3>- <span>Mr. Chandra Sekhar reddy</span> | Accounts officer | lnsfarmerinfor@gmail.com</h3>
            <h3>- <span>Mohan Raju N</span> | Technical Programmer | nmr1762002@gmail.com</h3>
            <h3>- <span>Samarth Srinivas</span> | Technical Programmer | samarthraju2002@gmail.com</h3>
            <h3>- <span>Sanjana Srinivas</span> | Technical Programmer | srinivassanjana1204@gmail.com</h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
