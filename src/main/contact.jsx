import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full rounded-lg shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center popBold">CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="mt-2 p-3 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="mt-2 p-3 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." className="mt-2 p-3 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" rows="4" required />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 text-darkest border-darkest border transition-all duration-500 hover:bg-darkest hover:text-white  rounded-lg shadow focus:outline-none focus:ring-4 focus:ring-blue-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
