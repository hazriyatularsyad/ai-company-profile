"use server"

import FetchingTesti from "@/app/fetchingRandomUser/fetchingTesti"


export default async function Tesimonial() {
  

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 overflow-y-scroll">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <div className="overflow-hidden bg-white rounded-md shadow-xl">
            <div className="px-8 py-12">
              <div className=" w-24 h-24 mx-auto">
                <FetchingTesti />
              </div>
              <blockquote className="mt-12">
                <p className="text-lg text-black">
                  Sumatra Barat menakjubkan! Danau Maninjau dan Ngarai Sianok
                  indah sekali. Makanan seperti rendang dan sate Padang sangat
                  lezat. Pasti akan kembali!
                </p>
              </blockquote>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-md shadow-xl">
            <div className="px-8 py-12">
              <div className=" w-24 h-24 mx-auto">
                <FetchingTesti />
              </div>
              <blockquote className="mt-12">
                <p className="text-lg text-black">
                  Wisata di Sumatra Barat luar biasa. Pantai Air Manis dan
                  Lembah Harau memukau. Budaya Minangkabau yang kaya membuat
                  perjalanan sangat berkesan.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-md shadow-xl">
            <div className="px-8 py-12">
              <div className=" w-24 h-24 mx-auto">
                <FetchingTesti />
              </div>
              <blockquote className="mt-12">
                <p className="text-lg text-black">
                  Bukittinggi dan Puncak Lawang di Sumatra Barat sungguh
                  mempesona. Wisata kuliner di Padang juga tak terlupakan. Ingin
                  kembali lagi!
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )


  
}



