import React from 'react';
import Boy from './images/girl.jpg';

const ReadingBoy = () => (
  <div className="container mx-auto w-10/12 p-7">
    <div className="flex flex-col lg:flex-row gap-3 items-center    ">
      <img className="w-full md:w-[75%] lg:w-[40%] mx-auto container  h-auto rounded-xl" src={Boy} alt="Reading Boy" />

      <div className="w-full md:w-[75%] lg:w-[60%] text-sm mx-auto container">
        <p>
          <span className="text-lg text-gray-500 font-bold ">Kingdom Of Salomon: </span>
          is not just a school; it is a beacon of educational
          excellence and a nurturing sanctuary for young minds. Our motto,
          *Nurturing Minds, Soaring Futures in the Kingdom of Solomon School*
          encapsulates our commitment to fostering a holistic educational experience.

          Within the walls of Kingdom Of Salomon, we unlock the immense potential
          residing within each student, guiding them toward a future filled with possibilities.
          Our mission is to inspire growth at every turn, cultivating a learning environment
          that goes beyond textbooks and examinations.

          At Kingdom Of Salomon, education is synonymous with excellence. We believe in empowering
          lives through knowledge and skills, encouraging students to explore their passions
          and talents. Our dedicated faculty and staff are committed to providing guidance
          and support, ensuring that each student not only meets but surpasses their academic
          and personal goals.
        </p>
        <p className="mt-5">
          <span className="text-lg  text-gray-500 font-bold">Our commitment:</span>
          {' '}
          to excellence extends beyond the confines of conventional education.
          We strive to create an atmosphere where curiosity is nurtured, critical thinking is
          fostered, and creativity knows no bounds. Kingdom of Solomon is not merely an educational
          institution; it is a community that values and cherishes the uniqueness of each student.

          Join us on this transformative educational journey at Kingdom of Solomon, where education
          is synonymous with empowerment, and the pursuit of knowledge
          is the key to unlocking a future
          of boundless opportunities. As students pass through the gates of Kingdom of Solomon, they
          do not just gain an education; they become part of a legacy of excellence,
          prepared
          to navigate
          the complexities of the world with confidence and purpose.
        </p>
      </div>

    </div>
  </div>
);

export default ReadingBoy;
