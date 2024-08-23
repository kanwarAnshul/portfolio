import { CodeBracketIcon, LightBulbIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
import homeAbout from '../../src/assets/images/homeAbout.jpg'
const About = () => {
  const features = [
    {
      name: 'Front-End Development',
      description:
        'I build responsive, user-centric web applications using React, ensuring a seamless experience across all devices.',
      icon: DevicePhoneMobileIcon,
    },
    {
      name: 'UI/UX Design',
      description:
        'Designing intuitive and visually appealing interfaces that enhance user satisfaction and engagement.',
      icon: LightBulbIcon,
    },
    {
      name: 'Web Design',
      description:
        'Expertise in integrating RESTful APIs and ensuring efficient communication between front-end and back-end systems.',
      icon: CodeBracketIcon,
    },
  ]

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">About Me</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Passionate Software Engineer</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I specialize in crafting modern, scalable web applications with a keen eye for design and a passion for solving complex problems. My expertise spans across front-end development, UI/UX design, and back-end integration.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Arpit Kumar Kanwar working"
            src={homeAbout}  // Replace with your actual image URL
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

export default About
