// "use client"
import Link from "next/link"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Button from "./Button"

export default function Event() {
//   useEffect(() => {
//     AOS.init({
//       once: false,
//     })
//   }, [])

  return (
    <section className="py-10 min-h-screen mt-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-start">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            This week events
          </h2>
        </div>

        <div className="px-5 py-8 bg-white shadow-xl lg:mt-5 lg:p-16 grid lg:grid-cols-2 md:grid-cols-1 grid-rows-2 md:grid-rows-1 md:flex-row gap-12">
          <div
            className="grid grid-cols-2 md:flex-row items-start col-span-1 row-span-1"
            // data-aos="fade-right"
          >
            <div className=" md:flex-row items-start col-span-1 row-span-1">
              <Image
                className="h-full w-full object-cover"
                src="/pacuJawi.jpg"
                alt="pacu jawi"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold text-black">
                Pacu Jawi
              </h3>

              <div>
                <p className="mt-4 text-base text-gray-600 text-pretty">
                  Tradisi lomba balap sapi khas masyarakat Minang...
                </p>
              </div>
              <div className="mt-4">
                <Link href="/detailEvent#pacuJawi">
                  <Button />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:flex-row items-start col-span-1 row-span-1"
            // data-aos="fade-left"
          >
            <div className=" md:flex-row items-start col-span-1 row-span-1">
              <Image
                className="h-full w-full object-cover"
                src="/tabuik.jpg"
                alt="tabuik"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold text-black">
                Festival Tabuik
              </h3>

              <div>
                <p className="mt-4 text-base text-gray-600 text-pretty">
                  Festival ini dirayakan setiap tahun baru...
                </p>
                <Link href="/detailEvent#tabuik">
                  <div className="mt-4">
                    <Button />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:flex-row items-start col-span-1 row-span-1"
            // data-aos="fade-right"
          >
            <div className=" md:flex-row items-start col-span-1 row-span-1">
              <Image
                className="h-full w-full object-cover"
                src="/pekanBudaya.jpeg"
                alt="festival budaya"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold text-black">
                Pekan Budaya Minangkabau
              </h3>

              <div>
                <p className="mt-4 text-base text-gray-600 text-pretty">
                  Acara ini menampilkan...
                </p>
              </div>
              <Link href="/detailEvent#pekanBudaya">
                <div className="mt-4">
                  <Button />
                </div>
              </Link>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:flex-row items-start col-span-1 row-span-1"
            // data-aos="fade-left"
          >
            <div className=" md:flex-row items-start col-span-1 row-span-1">
              <Image
                className="h-full w-full object-cover"
                src="/saluang.jpg"
                alt="saluang"
                width={200}
                height={200}
              />
            </div>
            <div className="ml-5">
              
                <h3 className="text-lg font-semibold text-black">
                  Lomba Saluang
                </h3>
              
              <div>
                <p className="mt-4 text-base text-gray-600 text-pretty">
                  Saluang adalah alat musik tradisional khas Minang...
                </p>
            </div>
            <Link href="/detailEvent#saluang">
              <div className="mt-4">
                <Button />
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
