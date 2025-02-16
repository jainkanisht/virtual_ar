import React from 'react';

const Features = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className="text-center">
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
          Feature
        </span>
        <h2 className='mt-10 font-medium text-4xl'>
          Easily build
          <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl'>
            {' '}your code
          </span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className='flex flex-wrap justify-center gap-10 gap-x-12 mt-20 px-4 md:px-40'>
        {/* Feature Card 1 */}
        <div className='flex flex-col h-44 w-56 p-4 border-neutral-700 rounded-lg border-2'>
          <h1 className='text-lg font-semibold'>Drag and Drop Interface</h1>
          <p className='text-sm text-neutral-400'>
            Build your applications effortlessly with our intuitive drag-and-drop interface. No coding experience required!
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className='flex flex-col h-44 w-56 p-4 border-neutral-700 rounded-lg border-2'>
          <h1 className='text-lg font-semibold'>Multi Platform</h1>
          <p className='text-sm text-neutral-400'>
            Develop once and deploy everywhere. Our platform supports web, mobile, and desktop applications seamlessly.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className='flex flex-col h-44 w-56 p-4 border-neutral-700 rounded-lg border-2'>
          <h1 className='text-lg font-semibold'>Built-in Templates</h1>
          <p className='text-sm text-neutral-400'>
            Jumpstart your projects with professionally designed templates for various use cases.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className='flex flex-col h-44 w-56 p-4 border-neutral-700 rounded-lg border-2'>
          <h1 className='text-lg font-semibold'>Real Time Review</h1>
          <p className='text-sm text-neutral-400'>
            Get instant feedback on your changes with real-time previews. See your updates live as you make them.
          </p>
        </div>

        {/* Feature Card 5 */}
        <div className='flex flex-col h-44 w-56 p-4 border-neutral-700 rounded-lg border-2'>
          <h1 className='text-lg font-semibold'>Collaboration Tools</h1>
          <p className='text-sm text-neutral-400'>
            Work together with your team in real-time. Share, comment, and collaborate on projects effortlessly.
          </p>
        </div>

        {/* Feature Card 6 */}
        <div className='flex flex-col h-44 w-56 p-4 border-neutral-700 rounded-lg border-2'>
          <h1 className='text-lg font-semibold'>Analytical Dashboard</h1>
          <p className='text-sm text-neutral-400'>
            Track your application's performance with detailed analytics and insights. Make data-driven decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;