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
    <section className=" min-h-screen mt-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold leading-tight underline-offset-3 text-black sm:text-4xl lg:text-5xl">
          This week events
        </h2>
        <p className=" text-center">look and pay attention to interesting performances</p>

        <div className="grid md:grid-cols-2 px-5  gap-5 bg-gray-50 lg:p-20 ">
          <div
            className="lg:h-[60vh] sm:h-[50vh] md:h-[60vh] shadow-2xl rounded-xl"
            // data-aos="fade-right"
          >
            <div className=" items-start col-span-1 md:h-[40vh] p-7 overflow-hidden">
              <Image
                className=" h-full w-full object-cover hover:scale-125 rounded-md  ease-in duration-150"
                src="/pacuJawi.jpg"
                alt="pacu jawi"
                width={300}
                height={200}
                priority
              />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold text-black">Pacu Jawi</h3>

              <p className="mt-2 text-base text-gray-600 text-pretty">
                Tradisi lomba balap sapi khas masyarakat Minang...
              </p>

              <div className="mt-3 mb-7">
                <Link href="/detailEvent#pacuJawi">
                  <Button />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="lg:h-[60vh] sm:h-[50vh]  md:h-[60vh] shadow-2xl rounded-xl"
            // data-aos="fade-left"
          >
            <div className="sm:h-[60vh] items-start col-span-1 md:h-[40vh] p-7 overflow-hidden">
              <Image
                className=" h-full w-full object-cover hover:scale-125 rounded-md  ease-in duration-150"
                src="/tabuik.jpg"
                alt="tabuik"
                width={300}
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
                  <div className="mt-4 mb-7">
                    <Button />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="lg:h-[60vh] sm:h-[50vh] md:h-[60vh] shadow-2xl rounded-xl"
            // data-aos="fade-right"
          >
            <div className="sm:h-[60vh] items-start col-span-1 md:h-[40vh] p-7 overflow-hidden">
              <Image
                className=" h-full w-full object-cover hover:scale-125 rounded-md  ease-in duration-150"
                src="/pekanBudaya.jpeg"
                alt="festival budaya"
                width={300}
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
                <div className="mt-4 mb-7">
                  <Button />
                </div>
              </Link>
            </div>
          </div>

          <div
            className="lg:h-[60vh] sm:h-[55vh]  md:h-[60vh] shadow-2xl rounded-xl"
            // data-aos="fade-left"
          >
            <div className="sm:h-[60vh] items-start col-span-1 md:h-[40vh] p-7 overflow-hidden">
              <Image
                className=" h-full w-full object-cover hover:scale-125 rounded-md  ease-in duration-150"
                src="/saluang.jpg"
                alt="saluang"
                width={300}
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
                <div className="mt-4 mb-7">
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
