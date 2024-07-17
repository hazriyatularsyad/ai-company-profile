"use client"
import { Carousel } from "flowbite-react"
import Image from "next/image"

export default function CarouselPic() {
  return (
    <section className=" bg-gray-50 sm:py-10 lg:py-10">
      <div className="flex justify-center items-center text-center mb-10">
        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
          Highlights
        </h2>
      </div>
      
        <div className=" flex justify-center items-center h-74 xl:h-80 2xl:h-96 ">
          <Carousel>
            <div className="grid grid-cols-2 h-56  gap-4  2xl:h-96">
              <Carousel>
                <Image
                  src="/c1.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c2.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c3.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c4.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c5.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
              </Carousel>
              <Carousel>
                <Image
                  src="/c5.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c4.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c3.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c2.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
                <Image
                  src="/c1.jpg"
                  alt="..."
                  height={200}
                  width={400}
                  priority
                />
              </Carousel>
            </div>
          </Carousel>
      </div>
    </section>
  )
}
