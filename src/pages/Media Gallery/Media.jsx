import React from 'react';
import mediaData from '../Media Gallery/Media.json';

export default function Media() {
  return (
    <>
      <div className='p-8 bg-gray-50'>
        <h1 className='text-4xl font-semibold mb-5 text-center'>Media Gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mediaData.map(item => (
            <div key={item.id} className='bg-white rounded-xl shadow-2xl px-2 py-1 flex flex-col items-center text-center transition-transform transform hover:scale-105'>
              <div className='w-full border-b-2 bg-gray-100 border-gray-300 mb-2'>
                <h2 className='text-3xl font-bold mb-2 text-gray-800'>{item.title}</h2>
              </div>
              
              {/* This container ensures both video and placeholder have the same aspect ratio */}
              <div className='w-full relative overflow-hidden rounded-lg' style={{ paddingTop: '56.25%' }}>

                {item.type === 'youtube' && (
                  <iframe 
                    className='absolute top-0 left-0 w-full h-full'
                    src={item.videoUrl} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                  </iframe>
                )}
                
                {item.type !== 'youtube' && (
                  <div className='absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center p-4'>
                    <p className='text-gray-500 font-medium'>
                      Video embed for {item.title} requires a separate library or script for proper rendering in React.
                    </p>
                  </div>
                )}
              </div>

              <p className='mt-4 text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}