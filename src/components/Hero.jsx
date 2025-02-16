import React from 'react'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>Virtual build tools</h1>
      <span className='bg-gradient-to-r from-orange-500 to bg-red-800 text-transparent bg-clip-text text-7xl'>for developers</span>

      <p className='text-neutral-500 mt-5 text-center text-lg max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, 
      doloremque sunt rerum maiores odit pariatur nesciunt consectetur deleniti sint eligendi.</p>

      <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-orange-500 to bg-orange-800 px-3 py-3 mx-3 border-0 rounded-md '>start for free</a>
        <a href="#" className='py-3 px-3 mx-3 rounded-md border'>Documentation</a>
      </div>
      <div className='flex mt-10 justify-center'>
        <img 
        src="https://files.oaiusercontent.com/file-SPSAWgktxU2UhGRYKBgwf8?se=2025-02-14T15%3A01%3A26Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D10fece71-47e4-479c-ae66-ac7e104a3c12.webp&sig=/%2B0/5cbuOXcBwRILv1qTFq9xy2W0wsZHlryEzzbgc78%3D"
        alt="image 1" className='rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-4 my-4 w-80 h-80'/>
        <img 
        src="https://files.oaiusercontent.com/file-LWEM2UqGhwTQZPhUM4rivL?se=2025-02-14T15%3A03%3A20Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc418ec62-73ef-4140-bd4d-d208721a49ef.webp&sig=I8UwRS4tkKBDkeD3zSERCIqWSMiMN8kH8Kb22aiccGo%3D" 
        alt="image 2" className='rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-4 my-4 w-80 h-80'/>
      </div>
    </div>
  )
}

export default Hero
