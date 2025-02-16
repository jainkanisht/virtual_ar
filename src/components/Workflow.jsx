import React from 'react';


const Workflow = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-center text-5xl'>Accelerate your
        <span className='bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text'> coding Workflow</span>
      </h2>
      <div className='flex flex-wrap justify-center '>
        <div className='p-2 lg:w-1/2 mt-9 '>
        <img 
        src="https://files.oaiusercontent.com/file-FjjZ7Z8fCVAQkgc3ki3yBN?se=2025-02-15T05%3A29%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D56b9f960-2a7b-43b2-a528-8ce42adeb596.webp&sig=x7gYEE/Mh35tSD9mnGvU6rXc5aS%2BIdRIsYxqQpmQxq0%3D"
        className='w-96 h-96'
        alt="" />
        </div>
        <div className="mt-10 text-xl w-96 space-y-8 text-green-200">
  {[
    "Make your coding journey simple",
    "Easy to use",
    "Simple to build",
    "Fast and simple",
    "AI-driven innovation at your fingertips",
    "Unlock the power of automation",
    "Seamless development experience",
  ].map((text, index) => (
    <label key={index} className="flex items-center space-x-2">
      <input type="checkbox" className="w-5 h-5" defaultChecked />
      <p>{text}</p>
    </label>
  ))}
</div>

      </div>
    </div>
  );
};

export default Workflow;