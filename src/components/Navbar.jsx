import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                {/* img div */}
                <a href="#">
                <div className='flex items-center flex-shirk-0'>
                    <img className='h-10 w-10 mr-2' src="https://files.oaiusercontent.com/file-9WChxCYo6f1CVD1y5mpcT2?se=2025-02-14T18%3A22%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9a0091bb-941b-412b-badb-64762a50c364.webp&sig=pwmtK2066dIr4n352FMxpOrtcuYxl0Md0IebGJBog9A%3D" alt="logo" />
                    <span className='text-xl tracking-tight'>Virtual-R</span>
                </div>
                </a>
                {/* img div -ends */}
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    <a href="#"><li className='hover:text-orange-800 font-bold  '>Features</li></a>
                    <a href="#Workflow"><li className='hover:text-orange-800 font-bold '>workFlow</li></a>
                    <a href="#"><li className='hover:text-orange-800 font-bold '>Pricing</li></a>
                    <a href="#"><li className='hover:text-orange-800 font-bold '>Testimonials</li></a>
                </ul>
                <div className='hidden lg:flex justify-center  space-x-12 items-center'>
                    <a href="#" className='py-2 px-3 border rounded-md'>Sign in</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md'>Create an account</a>

                </div>
                </div>

            </div>
    </nav>
  )
}

export default Navbar
