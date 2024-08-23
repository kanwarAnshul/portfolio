import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Feel free to reach out for any inquiries or just to connect.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Field className="flex gap-x-4">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send message
          </button>
        </div>
      </form>
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">You can also find me on:</p>
        <div className="mt-2 flex justify-center space-x-6">
          <a href="https://www.facebook.com/arpit.kumar.kanwar" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22.675 0H1.325C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24h11.494v-9.294H9.7v-3.62h3.118V8.413c0-3.1 1.891-4.788 4.655-4.788 1.325 0 2.462.1 2.794.142v3.24l-1.918.001c-1.505 0-1.794.716-1.794 1.764v2.313h3.588l-.467 3.62h-3.121V24h6.116c.731 0 1.325-.594 1.325-1.326V1.326C24 .594 23.406 0 22.675 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="https://twitter.com/Arpit_Kanwar_" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.96-3.127 1.184-.896-.959-2.173-1.557-3.594-1.557-2.722 0-4.927 2.205-4.927 4.927 0 .387.044.763.128 1.124-4.094-.205-7.725-2.164-10.148-5.144-.425.728-.666 1.574-.666 2.476 0 1.71.869 3.213 2.188 4.097-.806-.026-1.566-.247-2.228-.616v.061c0 2.385 1.697 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.316 0-.623-.031-.924-.089.624 1.953 2.444 3.376 4.6 3.416-1.684 1.32-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.002-7.504 14.002-14.002 0-.213 0-.425-.015-.637.961-.695 1.8-1.562 2.462-2.549l-.047-.02z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/arpit-kumar-kanwar-311886275/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.98 3.5C4.98 2.119 6.097 1 7.483 1s2.504 1.119 2.504 2.5S8.869 6 7.483 6C6.096 6 4.98 4.881 4.98 3.5zM.01 8.402h4.949V23.5H.01V8.402zm7.913 0h4.75v2.07h.063c.662-1.253 2.284-2.57 4.708-2.57 5.036 0 5.966 3.315 5.966 7.621v8.973H18.47v-7.96c0-1.901-.034-4.345-2.646-4.345-2.649 0-3.053 2.062-3.053 4.2v8.105h-4.75V8.402z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="https://github.com/kanwarAnshul" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577v-2.234c-3.338.727-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.757-1.333-1.757-1.091-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.303 3.495.998.108-.775.418-1.303.762-1.603-2.665-.305-5.466-1.332-5.466-5.931 0-1.311.469-2.381 1.236-3.22-.124-.304-.536-1.527.118-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.986-.4 3.008-.404 1.022.004 2.049.137 3.009.404 2.292-1.552 3.299-1.23 3.299-1.23.654 1.649.243 2.872.119 3.176.769.839 1.235 1.909 1.235 3.22 0 4.61-2.803 5.624-5.475 5.922.43.372.815 1.102.815 2.222v3.293c0 .321.218.694.825.576C20.565 22.093 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
