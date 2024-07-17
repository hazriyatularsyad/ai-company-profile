import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="md:hidden fixed inset-0 bg-gray-800 h-[35vh] bg-opacity-75 z-40">
      <div className="flex flex-col items-center justify-center h-full text-white space-y-6">
        <Link href="#home">
          <div className="hover:scale-110 transition duration-300 transform">
            Home
          </div>
        </Link>
        <Link href="/aboutUs">
          <div className="hover:scale-110 transition duration-300 transform">
            About Us
          </div>
        </Link>
        <Link href="#service">
          <div className="hover:scale-110 transition duration-300 transform">
            Services
          </div>
        </Link>
        <Link href="#contact">
          <button className="px-17 bg-yellow-400 hover:bg-yellow-500 text-white hover:text-black p-2 rounded">
            Contact Us
          </button>
        </Link>
        <button  className="border py-2 px-4" >
          X
        </button>
      </div>
    </div>
  )
}
