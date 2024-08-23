import React from 'react';
import newWeb from '../src/assets/images/newWeb.png';
import performance from '../src/assets/images/performace.png';
import responsive from '../src/assets/images/responsive.png';
import user from '../src/assets/images/user.png';
import mobile from '../src/assets/images/newMobile.png';
import webDesign from '../src/assets/images/webDesign.png'; // Import the image for Web Design

const services = [
  {
    title: "Responsive Design",
    description: "Ensuring your website looks great on all devices with mobile-first design principles and responsive layouts.",
    image: responsive,
  },
  {
    title: "Performance Optimization",
    description: "Improving website load times and performance through best practices and efficient code.",
    image: performance,
  },
  {
    title: "User Experience",
    description: "Focusing on creating engaging and intuitive user experiences to enhance user satisfaction.",
    image: user,
  },
  {
    title: "Web Development",
    description: "Seamlessly integrating third-party APIs to extend functionality and enhance your web applications.",
    image: newWeb,
  },
  {
    title: "Mobile Development",
    description: "Developing mobile applications with a focus on performance and user experience across different devices.",
    image: mobile,
  },
  {
    title: "Web Design", // New service section
    description: "Crafting visually appealing and user-friendly web designs that align with your brand's identity.",
    image: webDesign, // Replace with the appropriate image for web design
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As a dedicated frontend developer, I offer a range of services aimed at creating intuitive and visually
            appealing user interfaces. Explore how my expertise can help you build efficient and effective web solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-3 sm:mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 shadow-lg rounded-3xl ring-1 ring-gray-200 transition-transform duration-300 transform hover:scale-105 hover:ring-4 hover:ring-blue-500"
            >
              <div className="absolute inset-x-0 top-0 transform -translate-y-1/2 flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-cover rounded-full ring-4 ring-white"
                />
              </div>
              <div className="pt-16 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
