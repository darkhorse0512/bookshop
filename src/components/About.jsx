import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className="max-w-screen-2xl text-center pt-20 container mx-auto md:px-20 px-4 flex flex-col">
          <div className="text-2xl font-bold text-yellow-500">About US</div>
         
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
    <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/3627/3627782.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Shop</span>
            </h2>
            <p className="text-white-700">
              <span className="text-yellow-600">Mission </span>  All Books Available in One Website.!!
            </p>
        </div>
    </div>
</div>
</>
  )
}

export default About
