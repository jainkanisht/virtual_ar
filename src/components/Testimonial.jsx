import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Smith',
      comment: 'This is an awesome website to build and deploy projects!',
    },
    {
      name: 'Emily',
      comment: 'Incredible platform with seamless deployment options.',
    },
    {
      name: 'John',
      comment: 'Highly recommended for developers of all levels.',
    },
    {
      name: 'Sarah',
      comment: 'The best tool I’ve used for web development.',
    },
    {
      name: 'Michael',
      comment: 'Efficient, fast, and easy to use. Love it!',
    },
    {
      name: 'Jessica',
      comment: 'A game-changer for building and deploying websites.',
    },
  ];

  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-center text-4xl bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text my-10'>
        What people are saying
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto my-10'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='w-full h-auto border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-950'
          >
            <p className='text-gray-300 italic'>"{testimonial.comment}"</p>
            <div className='flex items-center mt-5'>
              <img
                className='w-12 h-12 mr-4 border rounded-full'
                src='' // Add your image URL here
                alt={testimonial.name}
              />
              <h3 className='text-orange-500 font-semibold'>{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;