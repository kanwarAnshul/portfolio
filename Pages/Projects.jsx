import { CheckIcon } from '@heroicons/react/20/solid'
import ProjectDetails from '../Component/Project'

const projects = [
  {
    id: 1,
    name: 'Weather App',
    description:
      'The Weather App is a mobile application built with React Native that provides real-time weather updates based on city names. It features a user-friendly interface, API integration for accurate forecasts, and responsive design to ensure a smooth experience across all devices.',
    features: ['Real-time weather updates', 'Built with React Native', 'API integration', 'Responsive design'],
    githubUrl: 'https://github.com/kanwarAnshul/WeatheApp',
    liveUrl: 'https://app.netlify.com/teams/kanwaranshul/sites',
  },

  {
    id: 2,
    name: 'Project Beta',
    description:
      'Project Beta is a dynamic web application featuring custom UI components and state management with Redux. It supports cross-platform compatibility and ensures secure authentication for users.',
    features: [
      'Custom UI components',
      'State management with Redux',
      'Cross-platform compatibility',
      'Secure authentication',
    ],
    githubUrl: 'https://github.com/yourusername/project-beta',
    liveUrl: 'https://yourprojectbeta.com',
  },
  {
    id: 3,
    name: 'Project Gamma',
    description:
      'Project Gamma focuses on providing real-time data updates and interactive charts. It includes user role management and data visualization features to enhance user engagement and data analysis.',
    features: ['Real-time data updates', 'Interactive charts', 'User role management', 'Data visualization'],
    githubUrl: 'https://github.com/yourusername/project-gamma',
    liveUrl: 'https://yourprojectgamma.com',
  },
  {
    id: 4,
    name: 'Project Delta',
    description:
      'Project Delta is a single-page application that features dynamic routing and local storage integration. It allows for custom themes and offers a seamless user experience across different devices.',
    features: ['Single-page application', 'Dynamic routing', 'Local storage integration', 'Custom themes'],
    githubUrl: 'https://github.com/yourusername/project-delta',
    liveUrl: 'https://yourprojectdelta.com',
  },
]

export default function ProjectPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Awesome Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A brief overview of the project. Describe what the project does, the technologies used, and the problem it
            solves.
          </p>
        </div>
        {projects.map((project, index) => {
          return (
            <>
              <ProjectDetails
                id={index}
                name={project.name}
                description={project.description}
                features={project.features}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}
