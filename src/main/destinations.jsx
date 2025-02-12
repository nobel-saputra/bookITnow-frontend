import { useState } from "react";
import dest1 from "../assets/1.png";
import dest2 from "../assets/2.png";
import dest3 from "../assets/3.png";

function About() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="mb-20">
      <div className="mt-24" id="destinations">
        <h1 className="text-3xl lg:text-5xl lg:text-end md:text-end sm:text-center text-center lg:me-20 md:me-20 me-0 popBold" data-aos="zoom-in" data-aos-duration="1000">
          Destinations
        </h1>
        <div className="flex justify-center lg:justify-end md:justify-end lg:me-20 md:me-20">
          <button data-aos="zoom-in" data-aos-duration="1000" className="text-white bg-darkest p-3 rounded-md popMed mt-4" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "Cut It Out" : "More Information"}
          </button>
        </div>
      </div>

      {/* Teks animasi */}
      <div className="flex justify-end">
        <div className={`${showInfo ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} transition-all duration-500 ease-in-out overflow-hidden`}>
          <p className="text-justify p-2 lg:me-20 md:me-20 mt-6 text-lg popMed max-w-2xl mx-auto">Discover breathtaking destinations around the world, from tranquil beaches to majestic mountains. Whether youre seeking adventure relaxation, or cultural immersion, theres a perfect place waiting for you</p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" className="destinations-card flex flex-col md:flex-row justify-end mt-32 mx-4 md:mx-20">
        {/* card 1 */}
        <div className="mb-4 md:mb-0 me-0 md:me-4 max-w-sm bg-white rounded-lg shadow-2xl">
          <a href="#">
            <img className="rounded-t-lg" src={dest1} alt="" />
          </a>
          <div className="p-5">
            <p className="text-sm popMed mb-3">
              <i className="fa-solid fa-location-dot me-2"></i>loremIpsum
            </p>
            <h5 className="mb-2 text-md md:text-lg popMed tracking-tight text-gray-900">Field Surrounded of Tall Trees</h5>
            <p className="mb-3 font-normal text-star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
            <a href="#" className=" me-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="xl:ms-2 md:ms-0 mt-2 md:mt-2 lg:mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-darkest border border-darkest rounded-lg hover:bg-darkest hover:text-white transition duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Booking now
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        {/* card 2 */}
        <div data-aos="fade-up" data-aos-duration="1500" className="lg:ms-4 md:ms-4 mb-4 md:mb-0 me-0 md:me-4 max-w-sm bg-white rounded-lg shadow-2xl">
          <a href="#">
            <img className="rounded-t-lg" src={dest2} alt="" />
          </a>
          <div className="p-5">
            <p className="text-sm popMed mb-3">
              <i className="fa-solid fa-location-dot me-2"></i>Zakynthos, Greece
            </p>
            <h5 className="mb-2 text-md md:text-lg popMed tracking-tight text-gray-900">Blue Sea Under Clear Blue Sky</h5>
            <p className="mb-3 font-normal text-star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
            <a href="#" className="me-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="xl:ms-2 md:ms-0 mt-2 md:mt-2 lg:mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-darkest border border-darkest rounded-lg hover:bg-darkest hover:text-white transition duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Booking now
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
        {/* card 3 */}
        <div data-aos="fade-up" data-aos-duration="1500" className="lg:ms-4 md:ms-4 mb-4 md:mb-0 me-0 md:me-4 max-w-sm bg-white rounded-lg shadow-2xl">
          <a href="#">
            <img className="rounded-t-lg" src={dest3} alt="" />
          </a>
          <div className="p-5">
            <p className="text-sm popMed mb-3">
              <i className="fa-solid fa-location-dot me-2"></i>Chile
            </p>
            <h5 className="mb-2 text-md md:text-lg popMed tracking-tight text-gray-900">Good Mountain</h5>
            <p className="mb-3 font-normal text-star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
            <a href="#" className="me-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="xl:ms-2 md:ms-0 mt-2 md:mt-2 lg:mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-darkest border border-darkest rounded-lg hover:bg-darkest hover:text-white transition duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Booking now
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
