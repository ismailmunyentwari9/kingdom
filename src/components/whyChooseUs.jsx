import React from 'react';

const whyChooseUs = () => (
  <div className="bg-slate-100 flex flex-col justify-center">
    <div className="flex container mx-auto w-[95%] my-20 gap-10 lg:flex-row flex-col  lg:p-5 p-2 justify-center items-center ">
      <div className="lg:w-1/2  w-full font-thin">
        <div className="flex  text-black gap-2 mt-5  justify-center ">
          <div>
            <i className="fas fa-quote-left ml-2 text-black" />
            <p className="font-bold text-[2rem]">WHY CHOOSE KINGDOM OF SALOMON SCHOOL</p>
            <i className="fas fa-quote-right ml-2 text-black" />
            <p className="text-[20px] font-thin lg:text-2xl text-lg italic lg:w-5/6 w-full">
              Welcome to the Kingdom of Solomon School, where we take great pride in nurturing
              young minds and providing a foundation for lifelong learning. Here is why parents
              choose us for their children:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li className="mb-2">
                <span className="font-bold">Holist</span>
                : We offer a holistic approach to education,
                focusing on the intellectual, social, and emotional development of each child.
              </li>
              <li className="mb-2">
                <span className="font-bold">Experienced Educators</span>
                : Our dedicated team of experienced educators
                is committed to creating a supportive and stimulating learning environment.
              </li>
              <li className="mb-2">
                <span className="font-bold">Cultural Enrichment</span>
                : Immerse your child in a culturally rich environment,
                where we celebrate diversity and promote understanding among students.
              </li>
              <li className="mb-2">
                <span className="font-bold">Safe and Inclusive</span>
                : The safety and well-being of your child are our top
                priorities. We maintain a secure and inclusive space for every student to thrive.
              </li>
              <li className="mb-2">
                <span className="font-bold">Innovative Teaching Methods</span>
                : Explore innovative teaching methods
                that keep pace with the evolving educational landscape, preparing your
                child for the future.
              </li>
              <li className="mb-2">
                <span className="font-bold">Engaging Facilities</span>
                : Our school features engaging facilities and
                resources designed to stimulate curiosity and creativity in young minds.
              </li>
              <li className="mb-2">
                <span className="font-bold">Parental Involvement</span>
                : We believe in the power of collaboration.
                Parents are actively involved in their childs educational journey,
                fostering a strong
                school-home partnership.
              </li>
              <li className="mb-2">
                <span className="font-bold">Community Values</span>
                : The Kingdom of Solomon School is built on
                values of respect, responsibility, and kindness, instilling a sense
                of community and shared purpose.
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="flex   flex-col lg:gap-20 gap-5 lg:w-1/2 w-full ">
        <div className="flex gap-10">
          <div className="flex gap-3  lg:flex-row flex-col">
            <span className="fas fa-users text-slate-400 text-[35px]  " />
            <span className="font-thin lg:text-2xl text-lg">

              <span className="font-bold">500+</span>
              {' '}
              <p>Students</p>
            </span>
          </div>
          <div className="flex gap-3  lg:flex-row flex-col">
            <span className="fa-solid fa-user-graduate text-slate-400 text-[35px] " />
            <span className="font-thin lg:text-2xl text-lg">
              <span className="font-bold">Best High</span>
              {' '}
              <p>Quality Education</p>
            </span>
          </div>
          <div />
        </div>
        <div className="flex gap-7">
          <div className="flex gap-3  lg:flex-row flex-col">
            <span className="fas fa-award text-slate-400 text-[35px]  " />
            <span className="font-thin lg:text-2xl text-lg">

              <p className="font-bold">We’ve 5+ Years</p>
              {' '}
              <p>Of Experience</p>
            </span>
          </div>
          <div className="flex gap-3  lg:flex-row flex-col">
            <span className="fas fa-clipboard-list text-slate-400 text-[35px] " />
            <span className="font-thin lg:text-2xl text-lg">
              <p className="font-bold">15+</p>
              {' '}
              <p>Qualified Teachers</p>
            </span>
          </div>
          <div />
        </div>

        <p className="text-[20px] font-thin lg:text-2xl text-lg italic lg:w-5/6 w-full mt-4">
          Choose the Kingdom of Solomon School for an educational experience that goes beyond
          textbooks, where your child will flourish academically, socially, and personally.
          We are dedicated to shaping future leaders with a
          strong foundation in both knowledge and character.
        </p>

        <div className="flex flex-col mt-10 gap-4">
          <p>
            <span className="border-2 rounded-full p-1 bg-white text-slate-400 mr-2 border-black fa fa-check" />
            <span className="font-thin">
              Best Way to Serve Quality Education
            </span>

          </p>
          <p>
            <span className="border-2 rounded-full p-1  bg-white text-slate-400 mr-2 border-black fa fa-check" />
            <span className="font-thin">
              Low Cost OF School Fees
            </span>

          </p>
        </div>
      </div>
    </div>
  </div>
);

export default whyChooseUs;
