import { PaperClipIcon } from '@heroicons/react/20/solid'
import Header from '../components/sections/Header'

export default function Example() {
  return (
    <>
    <Header />
    <div className="overflow-hidden bg-white shadow py-6 mt-14 sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">About us</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">All details and information.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">www.nz-online-pharmacy.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Founded at </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">1989</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Vaccines status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">We are all fully vaccinated</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Opening times</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Monday to Friday: 09:00 am to 06:00 pm
            Saturday 09:00 am to 03:00 pm
            Sunday: Closed</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Belmont Pharmacy has been owned and operated by pharmacist Allan and ex-Pharmacist Kathryn Pollock since 1989, and have since become an institution in the area servicing the health needs of the Devonport peninsula.

                Kathryn Pollock is also a NZ registered Naturopath and has built up an extensive natural health product range not to be found in any other NZ pharmacy.

                Belmont Pharmacy promotes itself as the "The Natural Health Store in a Pharmacy Setting - combining the very best combination of pharmaceutical & naturopathic knowledge, focussing on the optimisation of their customers overall health.

                So for trusted pharmaceutical care, advice and insight make Devonport’s Belmont Pharmacy your first choice.

                Allan Pollock is an accredited New Zealand Pharmacy Council practitioner.

                It is this expertise combined with their informative yet approachable customer service ethic that has made their pharmacy the family preferred store for all health and beauty needs within the North Shore region.

                Kathryn's Naturopathic expertise is another beneficial tool in their pharmacy & top of the line customer service.

                Belmont Pharmacy's products and service on offer vary from dispensing prescriptions and the general sale of over the counter medicines, natural health remedies and naturopathic solutions.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Our Story</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Raw Product List</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </>
  )
}