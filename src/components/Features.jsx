import { LockClosedIcon, PhotoIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import screenshot from './../assets/screen3.5.png'
const features = [
  {
    name: 'Easy to remember.',
    description: 'Associating an image with your credentials can be easier than remembering complex usernames and passwords.',
    icon: PhotoIcon,
  },
  {
    name: 'Hide your information.',
    description:
      'With just a few clicks you can encrypt your information into an image.',
    icon: LockClosedIcon,
  },
  {
    name: 'Keep it close.',
    description: 'Your information will be stored locally. No need for internet connection.',
    icon: ShieldCheckIcon,
  },
 
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2  text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Easily encrypt your information
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Using a steganography algorithm, the application encrypts the credentials in an image provided by the user and allows the user to export a new file generated with the encrypted credentials hidden in the image.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={screenshot}
            width={2432}
            height={1442}
            className="w-[48rem] lg:my-auto lg:max-w-none rounded-xl shadow-xl ring-1 md:max-w-full ring-gray-400/10 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
