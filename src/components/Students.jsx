import React from 'react';
import Grids from './images/grids.png';

const Students = () => (
  <div className="w-full">
    <div className="flex flex-col lg:flex-row mx-auto w-10/12 container items-center justify-between">
      <div className="lg:w-1/2 w-10/11">
        <h1 className="text-[4rem] font-bold italic">Who we are</h1>
        <p>
          <i className="fas fa-quote-left mr-2" />
          Discover the warmth of education
          at Kingdom of Salomon Primary

          School, nestled in the heart
          of Gisenyi, Rwanda. As an educational
          cornerstone in our community, we take
          immense pride in our unwavering commitment
          to providing not just an education, but
          a transformative experience for our students.

          At Kingdom of Salomon, we believe in fostering an
          environment where curiosity is ignited, dreams
          are nurtured, and each student is empowered
          to reach their fullest potential. Our dedicated
          team of educators is passionate about shaping
          the future leaders of our region, instilling
          not just knowledge but also values that will
          guide them through lifes journey.

          Our school is more than just a place of learning;
          it is a vibrant community that celebrates diversity,
          encourages creativity, and embraces collaboration.
          Through innovative teaching methods, state-of-the-art
          facilities, and a curriculum that combines academic
          rigor with real-world relevance, we strive to
          provide an education that goes beyond textbooks.
          <i className="fas fa-quote-right ml-2" />
        </p>
      </div>
      <div className="lg:w-1/2 w-10/11">
        <img src={Grids} alt="grids" />
      </div>
    </div>
  </div>
);

export default Students;
