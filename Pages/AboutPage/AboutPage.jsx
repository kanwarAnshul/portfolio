import { CheckIcon } from '@heroicons/react/20/solid'
import { LinkedIn, GitHub, Facebook, Twitter, Email } from '@mui/icons-material'
import profile from '../../src/assets/images/profile.jpg'
import resume from '../../public/File/finalResume.pdf'

const skills = ['Frontend Development', 'React.js & React Native', 'UI/UX Design', 'API Integration']

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am a passionate frontend developer with a keen eye for design and a deep understanding of modern web
            technologies. My journey in web development has equipped me with the skills to build user-friendly and
            efficient applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="lg:flex-shrink-0 lg:w-1/3">
            <div className="relative w-full h-96">
              {' '}
              {/* Fixed height */}
              <img
                className="rounded-2xl custom-border shadow-lg object-cover absolute inset-0 w-full h-full"
                src={profile}
                alt="Your Image"
              />
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Connect with Me</h3>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">Connect with Me</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                I am always eager to connect with fellow developers and tech enthusiasts. Whether you're looking to
                collaborate on a project or just want to chat about technology, feel free to reach out!
              </p>
              <p className="text-sm text-gray-500">76</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">My Approach to Development</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                My journey in frontend development has been fueled by a deep passion for creating intuitive and visually
                appealing user interfaces. I believe in the power of clean code and thoughtful design to enhance user
                experiences. From building responsive web applications to optimizing performance, I strive to deliver
                solutions that not only meet but exceed expectations.
              </p>
              <p className="text-sm text-gray-500">76</p>
            </div>

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Let's Connect</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <div className="mt-6 flex flex-col items-center lg:items-start gap-4">
              <div className="flex justify-center gap-x-4">
                <a
                  href="https://www.linkedin.com/in/arpit-kumar-kanwar-311886275/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn fontSize="large" className="text-indigo-600" />
                </a>
                <a href="https://github.com/kanwarAnshul" target="_blank" rel="noopener noreferrer">
                  <GitHub fontSize="large" className="text-indigo-600" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100025101455737  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook fontSize="large" className="text-indigo-600" />
                </a>
                <a href="https://x.com/arpitku06653752" target="_blank" rel="noopener noreferrer">
                  <Twitter fontSize="large" className="text-indigo-600" />
                </a>
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <Email fontSize="large" className="text-indigo-600" />
                <a href="mailto:your.email@example.com" className="text-base font-semibold text-gray-600">
                  karpit757@gmail.com
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              Feel free to reach out to me on these platforms or drop me an email.
            </p>
          </div>
        </div>
      </div>

      {/* New Section Added */}
      <div className="bg-gray-100 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frontend Technologies</h2>
              <p className="text-lg leading-8 text-gray-600">
                As a frontend developer, I have extensive experience with modern web technologies. My expertise lies in
                creating interactive and responsive user interfaces using a variety of tools and frameworks. I am
                proficient in HTML, CSS, JavaScript, and React.js, and I am always eager to learn and adapt to new
                technologies.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                My approach to frontend development is centered around creating user-centric designs and ensuring
                optimal performance. I use best practices and the latest industry standards to build scalable and
                maintainable applications.
              </p>
              <a
                href={resume} // Replace with the actual path to your CV
                className="inline-block px-6 py-3 mt-4 text-base font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
                download
              >
                Download CV
              </a>
            </div>

            {/* Progress Bars Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills Progress</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">JavaScript</h3>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-600">75%</span>
                    </div>
                    <div className="flex h-2 mt-1 overflow-hidden rounded bg-gray-200">
                      <div className="w-3/4 bg-indigo-600"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">CSS</h3>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-600">80%</span>
                    </div>
                    <div className="flex h-2 mt-1 overflow-hidden rounded bg-gray-200">
                      <div className="w-4/5 bg-indigo-600"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">HTML</h3>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-600">90%</span>
                    </div>
                    <div className="flex h-2 mt-1 overflow-hidden rounded bg-gray-200">
                      <div className="w-9/10 bg-indigo-600"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">React.js</h3>
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-600">70%</span>
                    </div>
                    <div className="flex h-2 mt-1 overflow-hidden rounded bg-gray-200">
                      <div className="w-7/10 bg-indigo-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
