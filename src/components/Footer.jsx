import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutal-700 w-3/4 mx-auto border-green-300'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='space-y-2 '>
                <h3 className='text-md font-semibold mb-4'>Resources</h3>
                <ul>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Getting started</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Documentation</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Tutorials</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Community forms</li></a>
                </ul>
            </div>
            {/* platform */}
            <div className='space-y-3 '>
                <h3 className='text-md font-semibold mb-4'>Platform</h3>
                <ul>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Features</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Supported devices</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>System Requirment</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Release Notes</li></a>
                </ul>
            </div>
            {/* community */}
            <div className='space-y-3 '>
                <h3 className='text-md font-semibold mb-4'>Platform</h3>
                <ul>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Events</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Meetups</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Hackathons</li></a>
                    <a href="#link"className='text-neutral-300 hover:text-white'><li>Jobs</li></a>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
