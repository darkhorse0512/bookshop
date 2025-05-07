import React from "react";
import { Link } from "react-router-dom";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `pune Maharashtra `,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+ 91 8767820250`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `shindepratik3095gmail.com`,
    },
    
  ];
  return (
    <>
      <div>
        {" "}
        <div className="max-w-screen-2xl text-center pt-20 container mx-auto md:px-20 px-4 flex flex-col">
          <div className="text-2xl font-bold text-yellow-500">Contact Me</div>
         
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      
         
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
        <form >
               
              <h3 className="font-bold text-lg">Contact</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* address*/}
              <div className="mt-4 space-y-2">
                <span>Address</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Address"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register(" address", { required: true })}
                />
                <br />
                {errors.address && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Phone</span>
                <br />
                <input
                  type="number"
                  placeholder="Enter your Phone no"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register(" phone", { required: true })}
                />
                <br />
                {errors.phone && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <span>massage</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your massage"
                  className="w-80 h-20 px-3 py-1 border rounded-md outline-none"
                  {...register(" massage", { required: true })}
                />
                <br />
                {errors.massage && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex mx-10 mt-5">
                <button className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200">
                  Send
                </button>
                 
              </div>
            </form>
        </div>
        <div className="lg:w-1/2 w-full   p-4">
          <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03447396975!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723571155386!5m2!1sen!2sin"  
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;