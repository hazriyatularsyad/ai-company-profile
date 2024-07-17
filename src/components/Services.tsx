import Link from "next/link"


 async function getData() {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/xclnwby8n8yw/environments/master/entries?access_token=9eEOWTpu5OgW3ta_2Xh0hQ4GTBPiJLbhuBZ2TfKr604", {
      method: "GET",
      cache: "force-cache"
    }
    )
    if (!response.ok)
      throw new Error("failed to fetch data")
   const jsonData = response.json()
   return jsonData
  }

export default async function Services() {

const repo = await getData()

  
  return (
    <section id="service" className="py-20 bg-gray-50 sm:mt-3">
      <div id="services" className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center mb-7">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="text-center text-l text-gray-700 font-sans max-w-2xl mt-5 mb-10">
            Explore your dream destination with a travel package designed
            especially for you
          </p>
        </div>
        <div className="flex flex-wrap lg:max-md:w-full sm:grid-flow-col -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8"
            // data-aos="fade-up"
          >
            <Link
              href={`/servicePage/${repo.items[1].fields.slug}`}
              className="block relative bg-white rounded-lg shadow-lg group overflow-hidden"
            >
              <div
                className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/paket.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white px-4 text-center">
                  Explore our exclusive travel packages designed for your
                  ultimate comfort and adventure. Choose from a variety of
                  destinations and experiences.
                </p>
              </div>
              <h3 className="text-2xl font-bold text-center text-black my-4">
                Travel Packages
              </h3>
            </Link>
          </div>
          <div
            className="w-full md:w-1/3 px-4 mb-8"
            // data-aos="fade-up"
            // data-aos-delay="300"
          >
            <Link
              href={`/servicePage/${repo.items[0].fields.slug}`}
              className="block relative bg-white rounded-lg shadow-lg group overflow-hidden"
            >
              <div
                className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/tour.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white px-4 text-center">
                  Join our guided tours to explore the most iconic landmarks and
                  hidden gems with experienced guides who bring the history and
                  culture to life.
                </p>
              </div>
              <h3 className="text-2xl font-bold text-center text-black my-4">
                Guided Tours
              </h3>
            </Link>
          </div>
          <div
            className="w-full md:w-1/3 px-4 mb-8"
            // data-aos="fade-up"
            // data-aos-delay="600"
          >
            <Link
              href={`/servicePage/${repo.items[2].fields.slug}`}
              className="block relative bg-white rounded-lg shadow-lg group overflow-hidden"
            >
              <div
                className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: "url('/akomo.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white px-4 text-center">
                  Stay in the best hotels, resorts, and vacation rentals
                  handpicked to ensure a comfortable and memorable stay. Enjoy
                  world-class amenities and services.
                </p>
              </div>
              <h3 className="text-2xl font-bold text-center text-black my-4 ">
                Accommodation
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
