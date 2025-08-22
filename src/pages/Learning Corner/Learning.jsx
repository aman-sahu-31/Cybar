import React from 'react';
import courses from '../Learning Corner/Learning.json'; // Assuming your JSON file is in the same directory

function Learning() {
  return (
    <>
      <div className='w-full h-full p-8'>
        <h1 className='text-3xl font-bold text-center mb-6'>Learning Points</h1>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {courses.map(course => (
            <div key={course.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <img 
                src={course.imageUrl} 
                alt={course.title}
                className='w-full h-48 object-cover' 
              />
              <div className='p-4'>
                <h2 className='text-[16px] font-bold mb-2'>{course.title}</h2>
                <p className='text-gray-600 text-justify text-sm mb-4'>{course.description}</p>
                <a 
                  href={course.link} 
                  className='inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Learning;