import Image from "next/image"

export default function DetailEvent() {
  return (
    <section className="scroll-smooth">
      <div id="pacuJawi" className="min-h-screen mt-16">
        <div className=" w-1/2 mx-auto">
          <Image
            src="/pacuJawi.jpg"
            alt="pacu jawi"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex text-center justify-center mt-7">
          <h2 className="text-4xl font-primary font-semibold">Pacu Jawi</h2>
        </div>
        <div className="w-1/2 flex text-center mt-7 mx-auto ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nihil nulla cum labore laboriosam sapiente ipsum quos. Est
            blanditiis suscipit ipsum, sint necessitatibus eum, molestiae iusto
            nam laboriosam nesciunt minus excepturi officia. Sit quas molestias
            incidunt unde iste officia non, sapiente consectetur, cupiditate
            dolores nam adipisci fugit nesciunt dignissimos distinctio.
          </p>
        </div>
      </div>
      <div id="saluang" className="min-h-screen">
        <div className=" w-1/2 mx-auto">
          <Image
            src="/saluang.jpg"
            alt="saluang"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex text-center justify-center mt-7">
          <h2 className="text-4xl font-primary font-semibold">Pertunjukan Saluang</h2>
        </div>
        <div className="w-1/2 flex text-center mt-7 mx-auto ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nihil nulla cum labore laboriosam sapiente ipsum quos. Est
            blanditiis suscipit ipsum, sint necessitatibus eum, molestiae iusto
            nam laboriosam nesciunt minus excepturi officia. Sit quas molestias
            incidunt unde iste officia non, sapiente consectetur, cupiditate
            dolores nam adipisci fugit nesciunt dignissimos distinctio.
          </p>
        </div>
      </div>
      <div id="tabuik" className="min-h-screen">
        <div className=" w-1/2 mx-auto">
          <Image
            src="/tabuik.jpg"
            alt="tabuik"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex text-center justify-center mt-7">
          <h2 className="text-4xl font-primary font-semibold">Tabuik</h2>
        </div>
        <div className="w-1/2 flex text-center mt-7 mx-auto ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nihil nulla cum labore laboriosam sapiente ipsum quos. Est
            blanditiis suscipit ipsum, sint necessitatibus eum, molestiae iusto
            nam laboriosam nesciunt minus excepturi officia. Sit quas molestias
            incidunt unde iste officia non, sapiente consectetur, cupiditate
            dolores nam adipisci fugit nesciunt dignissimos distinctio.
          </p>
        </div>
      </div>
      <div id="pekanBudaya" className="min-h-screen">
        <div className=" w-1/2 mx-auto">
          <Image
            src="/pekanBudaya.jpeg"
            alt="pekan budaya"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex text-center justify-center mt-7">
          <h2 className="text-4xl font-primary font-semibold">Pekan Budaya</h2>
        </div>
        <div className="w-1/2 flex text-center mt-7 mx-auto ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nihil nulla cum labore laboriosam sapiente ipsum quos. Est
            blanditiis suscipit ipsum, sint necessitatibus eum, molestiae iusto
            nam laboriosam nesciunt minus excepturi officia. Sit quas molestias
            incidunt unde iste officia non, sapiente consectetur, cupiditate
            dolores nam adipisci fugit nesciunt dignissimos distinctio.
          </p>
        </div>
      </div>
    </section>
  )
}
