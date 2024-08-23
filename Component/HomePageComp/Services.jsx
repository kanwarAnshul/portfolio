import { useState } from 'react'
import web from '../../src/assets/images/web.png'
import mobile from '../../src/assets/images/mobile.png'
import UIUX from '../../src/assets/images/UIUX.png'
import WordPress from '../../src/assets/images/WordPress.png'
import webDesign from '../../src/assets/images/webDesign2.png'

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null)

  const services = [
    {
      title: 'Web Development',
      imageUrl: web,
      href: 'https://www.geeksforgeeks.org/web-development/',
    },
    {
      title: 'Mobile Development',
      imageUrl: mobile,
      href: 'https://reactnative.dev/',
    },
    {
      title: 'UI/UX Design',
      imageUrl: UIUX,
      href: 'https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/',
    },
    {
      title: 'Wordpress Development',
      imageUrl: WordPress,
      href: 'https://developer.wordpress.org/',
    },
    {
      title: 'Web Design',
      imageUrl: webDesign,
      href: 'https://www.wix.com/blog/web-design',
    },
  ]

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Services I’m Providing</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I offer a range of services designed to meet your needs and help you achieve your goals. From custom web
              development to UX design, here’s what you can expect.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {services.map((service, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100 overflow-hidden rounded-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl group"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    backgroundImage:
                      hoverIndex === index
                        ? 'radial-gradient(circle, hsla(243, 75%, 59%, 1) 2%, hsla(221, 39%, 11%, 1) 100%)'
                        : '',
                    transition: 'background-image 0.3s ease',
                  }}
                >
                  <div className="card-body d-flex flex-column p-5 text-center">
                    <h3
                      className="mb-4 text-xl font-semibold"
                      style={{
                        color: hoverIndex === index ? 'white' : 'black',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {service.title}
                    </h3>
                    <div
                      className="flex-grow mb-4 rounded-lg"
                      style={{
                        backgroundImage: `url(${service.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '200px',
                      }}
                    />
                    <a href={service.href} target='_blank'>
                      <button
                        className="mt-10 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors"
                        style={{
                          backgroundColor: hoverIndex === index ? '#4F46E5' : '#111827',
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
