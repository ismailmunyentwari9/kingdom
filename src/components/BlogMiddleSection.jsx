import React from 'react';
import Girl from './images/girl.jpg';
import Parents from './images/parents1.jpg';
import Staff from './images/staff.jpg';

const BlogMiddleSection = () => {
  const BlogPosts = [
    {
      title: 'End of year graduation ceremony.',
      content: 'Let us come together to celebrate and applaud the remarkable achievements of our graduating class. As we gather to honor their hard work, dedication, and resilience, we are reminded of the countless hours of study, the unwavering commitment to excellence, and the ability to overcome challenges that define this exceptional group.Today marks not just the end of an academic journey but the beginning of a new chapter in the lives of these talented individuals. As we reflect on their accomplishments, we can not help but feel immense pride in the accomplishments of the Class of 2021.',
      Author: 'KingDom Of Salomon',
      Date: 'August 11, 2023',
      Image: Girl,
    },
    {
      title: 'End of year graduation ceremony.',
      content: 'Let us come together to celebrate and applaud the remarkable achievements of our graduating class. As we gather to honor their hard work, dedication, and resilience, we are reminded of the countless hours of study, the unwavering commitment to excellence, and the ability to overcome challenges that define this exceptional group.Today marks not just the end of an academic journey but the beginning of a new chapter in the lives of these talented individuals. As we reflect on their accomplishments, we can not help but feel immense pride in the accomplishments of the Class of 2021.',
      Author: 'KingDom Of Salomon',
      Date: 'August 11, 2023',
      Image: Parents,
    },
    {
      title: 'End of year graduation ceremony.',
      content: 'Let us come together to celebrate and applaud the remarkable achievements of our graduating class. As we gather to honor their hard work, dedication, and resilience, we are reminded of the countless hours of study, the unwavering commitment to excellence, and the ability to overcome challenges that define this exceptional group.Today marks not just the end of an academic journey but the beginning of a new chapter in the lives of these talented individuals. As we reflect on their accomplishments, we can not help but feel immense pride in the accomplishments of the Class of 2021.',
      Author: 'KingDom Of Salomon',
      Date: 'August 11, 2023',
      Image: Staff,
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="">
      {BlogPosts.map((blogPost) => (
        <div key={blogPost.Date} className="mx-auto w-11/12 bg-white shadow-2xl rounded-3xl  flex flex-col p-5 mb-5">
          <div className="flex lg:flex-row flex-col lg:items-start items-center gap-9">
            <div className="lg:w-2/3  w-full">
              <h2 className="text-2xl font-bold mb-4">{blogPost.title}</h2>
              <p className="text-gray-700 mb-4 text-lg ">{blogPost.content}</p>
              <p className="text-gray-600 font-bold text-xl">
                Author:
                <span className="font-normal text-lg text-black">{blogPost.Author}</span>
              </p>
              <p className="text-gray-600 font-bold text-xl">
                Date:
                <span className="font-normal text-lg text-black">{blogPost.Date}</span>
              </p>
            </div>
            <img src={blogPost.Image} alt="BlogImage" className=" rounded-md lg:w-1/4 w-3/4" />
          </div>
        </div>
      ))}
    </div>

  );
};

export default BlogMiddleSection;
