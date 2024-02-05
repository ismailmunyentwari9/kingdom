import React from 'react';
import Grids from './images/grids.png';

const Students = () => (
  <div className="w-full">
    <div className="flex flex-col lg:flex-row mx-auto w-10/12 container items-center justify-between">
      <div className="lg:w-1/2 w-10/11">
        <h1 className="text-[4rem] font-bold italic">Who we are</h1>
        <p>
          <i className="fas fa-quote-left mr-2" />
          Kingdom of Solomon Nursery & Primary School,
          established in 2017 in Rubavu District,
          Western Province of Rwanda, is dedicated
          to providing quality education at an
          affordable price. With a focus on
          challenging and engaging students
          in a safe and supportive environment,
          the school aims to prepare them for
          a successful future and instill a
          sense of responsibility and
          accountability in both teachers
          and students. The core of school
          objectives include equipping
          students to thrive and contribute
          to their communities, fostering
          a culture of innovation, enthusiasm,
          and commitment among teachers and staff,
          and building trust with parents as a
          culturally responsive institution
          that provides a first-class education.

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
