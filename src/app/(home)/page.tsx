import Banner from "@/components/Banner"
import Contact from "@/components/Contact"
import Event from "@/components/Event"
import Services from "@/components/Services"
import Teams from "@/components/Teams"
import Testimoni from "@/components/Testimoni"
import Word from "@/components/Word"

import { title } from "process"
import CarouselPage from "../carousel/page"

export const metadata = {
  title: "Home Page",
  description: "Sumbar Tourism",
  
}

export default function Home() {
  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Banner />
      <Word />
      <Event />
      <Services />
      {/* <CarouselPage/> */}
      <Testimoni />
      <Teams />
      <Contact />
    </div>
  )
}
