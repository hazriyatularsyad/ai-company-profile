import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative top-0 sm:h-[25vh] lg:h-[68vh] overflow-hidden">
      <div className="w-full ">
        <Image
          className="w-full lg:h-screen sm:h-auto md:h-auto object-cover"
          src="/a.webp"
          alt="cover"
          width={900}
          height={400}
          priority
        />
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-auto bg-opacity-50 bg-slate-600">
        <div className="text-white font-semibold text-center p-8">
          <h1 className="text-5xl uppercase">Wonderful Sumatra Barat</h1>
          <h3 className="text-2xl uppercase mt-3">
            Embrace the Beauty of West Sumatra!
          </h3>
        </div>
      </div> */}
    </div>
  )
}
 
  
 