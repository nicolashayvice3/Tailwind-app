
import Greens from "../assets/greenspowder.jpeg"
import Musashi from "../assets/musashi.jpeg"
import Vegan from "../assets/veganprotein.jpg"
import Gummies from "../assets/gummies.png"

import ShoppingCart from "../components/sections/ShoppingCart"
import Header from "../components/sections/Header"

const products = [
    {
    id: 1,
    name: 'Bottle Of The Gods',
    href: '',
    price: '$10,000',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'zeus himself would revive if he drank from this bottle',
    },
    {
    id: 2,
    name: 'Super Spice Mix',
    href: '',
    price: '$400',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Gingseng, olive oil, cardano and even a bit of pepper',
    },
    {
    id: 3,
    name: 'Prescription',
    href: '',
    price: '$N/A',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
    id: 4,
    name: 'Vibrating Pen',
    href: '',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Pen that vibrates, good for long hours of writting',
    },
    {
    id: 5,
    name: 'Vitamin Gummies',
    href: '',
    price: '$900',
    imageSrc: {Gummies},
    imageAlt: 'Vitamin gummies for children',
    },
    {
    id: 6,
    name: 'Musashi Protein Powder',
    href: '',
    price: '$3',
    imageSrc: {Musashi},
    imageAlt: 'Protein powder',
    },
    {
    id: 7,
    name: 'Greens Powder',
    href: '',
    price: '$33',
    imageSrc: {Greens},
    imageAlt: 'Greens powder',
    },
    {
    id: 8,
    name: 'Vegan Protein Powder',
    href: '',
    price: '$3,343',
    imageSrc: {Vegan},
    imageAlt: 'Vegan protein powder',
    },
]

const handleSubmit = () => {
    ShoppingCart()
}

  
export default function Example() {

    return (
    <div className="bg-white">
        <Header />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-black mont-font flex font-semibold text-4xl my-6">Products</h2>

        <ShoppingCart />

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    onClick={handleSubmit}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
            ))}
        </div>
        </div>
    </div>
    )
}