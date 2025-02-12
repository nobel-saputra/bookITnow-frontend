import { useState } from "react";
import { Home, Compass, Phone, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import homeBg from "../assets/homeBg.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Compass, label: "Destinations", href: "#destinations" },
    { icon: Phone, label: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex h-screen" id="home">
      {/* Mobile Overlay */}
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full 
          bg-gradient-to-b from-white to-gray-100 
          shadow-2xl z-50 
          transition-all duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          ${isOpen ? "w-64" : "w-16"}
          md:translate-x-0 
          border-r border-gray-200
        `}>
        {/* Sidebar Header */}
        <div
          className={`
          p-6 flex items-center 
          ${isOpen ? "justify-between" : "justify-center"}
          border-b border-gray-200
        `}>
          {isOpen && <h1 className="text-lg tracking-[0.3em]">Book It Now</h1>}
          <button className="md:hidden text-gray-600 hover:text-red-500" onClick={() => setIsMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                flex items-center 
                ${isOpen ? "px-4 py-3" : "justify-center py-3"}
                rounded-lg 
                text-gray-700 
                hover:bg-red-50 
                hover:text-red-600 
                transition-colors 
                group
              `}>
              <item.icon className="text-gray-500 group-hover:text-red-500 transition-colors" size={20} />
              {isOpen && <span className="ml-3 font-medium">{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Desktop Toggle Button */}
        <button
          className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 
          bg-white shadow-md p-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Main content and mobile toggle button */}
      <div
        className={`
        flex-1 relative 
        transition-all duration-300 
        ${isOpen ? "md:ml-64" : "md:ml-16"}
      `}>
        {/* Mobile Toggle Button */}
        <button
          className={`
            fixed top-4 left-4 z-50 
            bg-white shadow-md 
            p-2 rounded-full 
            ${isMobileOpen ? "hidden" : "block"}
            md:hidden
          `}
          onClick={() => setIsMobileOpen(true)}>
          <Menu size={24} className="text-red-500" />
        </button>

        {/* Main Content */}
        <div className="bg-fixed relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${homeBg})` }}>
          {/* Overlay untuk menurunkan frekuensi gambar dan memberi latar belakang warna */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Kontainer dengan Flexbox untuk memusatkan teks secara vertikal di kanan */}
          <div className="absolute inset-0 flex items-center justify-end p-10 pt-36 z-10">
            <div className="lg:text-end md:text-end sm:text-end text-center">
              <h1 className="text-4xl lg:text-8xl md:text-7xl sm:text-5xl font-bold text-white popBold" data-aos="fade-left" data-aos-duration="2000">
                Book It Now !
              </h1>
              <p className="text-lg mt-4 sm:text-2xl md:text-3xl lg:text-4xl text-white popMed" data-aos="fade-left" data-aos-duration="2000">
                Explore your dream destinations with ease
              </p>
              <button data-aos="zoom-in" data-aos-duration="1000" className="bg-slate-100 text-black p-3 rounded-md popMed mt-4" href="#destinations">
                <a href="#destinations">Find Something</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
