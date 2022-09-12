import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Website',
    description:
      'https://www.nz-online-pharmacy.com/',
    icon: GlobeAltIcon,
  },
  {
    name: 'Location',
    description:
      'Belmont Pharmacy Limited, 143 Lake Road Devonport, Auckland 0622, New Zealand',
    icon: ScaleIcon,
  },
  {
    name: 'Email',
    description:
      'belmontpharmacy@xtra.co.nz',
    icon: BoltIcon,
  },
  {
    name: 'Mobile',
    description:
      'International Customers: +64 9 445 8247, New Zealand Customers: 09 445 8247',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-green-600 mt-10">Contact details</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to communicate
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            All our details are as follows:
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}