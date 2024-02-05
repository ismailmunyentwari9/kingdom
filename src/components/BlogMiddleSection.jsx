import React from 'react';
import Girl from './images/girl.jpg';
import Parents from './images/parents1.jpg';
import Staff from './images/staff.jpg';
// import StuffGuy from './images/staff_guy.jpg';

const BlogMiddleSection = () => {
  const BlogPosts = [
    {
      title: 'End of year graduation ceremony.',
      content: 'As we stand on the cusp of a momentous occasion, itis with immense pride and excitement that we announce the upcoming graduation ceremony at the Kingdom of Salomon. This milestone event is a testament to the dedication, perseverance, and academic excellence that have characterized the journey of our remarkable students. Our graduation ceremony promises to be a grand affair, filled with pomp, circumstance, and a profound sense of accomplishment. The majestic surroundings of the Kingdom of Salomon will serve as the perfect backdrop for this momentous event. Families, friends, faculty, and the entire community are invited to join us in honoring the achievements of our graduating class.',
      Author: 'KingDom Of Salomon',
      Date: 'August 11, 2023',
      Image: Girl,
    },
    {
      title: 'The Heartbeat of Support: Parents Committee at the Kingdom of Salomon',
      content: 'In the Kingdom of Salomon, the vibrant heartbeat of our school community lies in the dedicated efforts of our esteemed Parents Committee. Comprising passionate and engaged parents, this committee plays an instrumental role in fostering an environment where the pursuit of educational excellence thrives. Lets delve into how this dynamic group of parents contributes to the Kingdom of Salomons success',
      Author: 'KingDom Of Salomon',
      Date: 'Feb 11, 2024',
      Image: Parents,
    },
    {
      title: ' Celebrating Excellence: A Heartfelt Tribute to the Kingdom of Salomon Staff',
      content: 'Navigating the Rich and Varied Terrain of Academia, Learning, and Growth, it is Undeniably Clear that Our Collective Expedition at the Kingdom of Salomon Transcends the Ordinary. Each Forward Stride is a Powerful Testament to the Collaborative Spirit and Unyielding Dedication Exhibited by the Exceptional and Passionate Individuals who, with Precision, Disseminate Wisdom, Cultivate Curiosity, and Tenderly Nourish the Soul of Our Educational Sanctuary',
      Author: 'KingDom Of Salomon',
      Date: 'June 11, 2020',
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
