import { useEffect, useState } from 'react'
import About from '../Component/HomePageComp/About'
import Experience from '../Component/HomePageComp/Experience'
import Services from '../Component/HomePageComp/Services'
import profile from '../src/assets/images/profile3.png'
import { useTypingEffect } from '../CutomHook/useTypingEffect'
import { FaLinkedin, FaTwitter, FaUpwork } from 'react-icons/fa6'
import background from '../src/assets/images/background.png'
import resume from '../public/File/finalResume.pdf'

export const Homepage = () => {
  const titles = ['Web Developer', 'WordPress Developer', 'Software Engineer', 'UI/UX Designer', 'Graphic Designer']
  const typedText = useTypingEffect(titles, 150, 2000)

  return (
    <>
      {/* HERO SECTION  */}

      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <section className="flex isolate flex-col-reverse lg:flex-row items-center justify-between py-12 px-6 lg:px-20 bg-transparent text-white relative z-10">
          <div className="text-left max-w-lg">
            <h2 className="text-2xl lg:text-6xl font-bold transform hover:scale-105 transition duration-300 ease-in-out">
              Hi, I'm <span className="text-indigo-400">Arpit Kumar Kanwar</span>,
            </h2>
            <h2 className="text-2xl lg:text-4xl font-medium mt-4">
              a <span className="text-indigo-400">{typedText}</span>
            </h2>
            <p className="mt-4 text-lg lg:text-xl transform hover:translate-x-2 transition duration-300 ease-in-out">
              A passionate <span className="text-indigo-400">Software Engineer</span> specializing in creating amazing
              web and mobile experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/in/arpit-kumar-kanwar-311886275/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white transition duration-300 ease-in-out"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white transition duration-300 ease-in-out"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01b4cd7b0c01694e9d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white transition duration-300 ease-in-out"
              >
                <FaUpwork size={30} />
              </a>
            </div>
            <a href={resume} download>
              <button className="mt-8 px-6 py-3 bg-indigo-800 text-indigo-100 font-bold rounded-full shadow-lg transform hover:translate-y-1 hover:scale-105 transition duration-300 ease-in-out">
                Download CV
              </button>
            </a>
          </div>
          <div className="mb-8 lg:mb-0 lg:ml-8 transform hover:rotate-6 transition duration-300 ease-in-out">
            <img
              src={profile}
              alt="Arpit Kumar Kanwar"
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-indigo-400 shadow-lg"
            />
          </div>
        </section>
      </div>

      {/* ABOUT SECTION  */}
      <About />
      {/* SERVICES  */}
      <Services />
      {/* EXPERIENCE  */}
      <Experience />
    </>
  )
}
