
export default function Button() {
    return (
      
      <div className="flex gap-4">
        <button className="text-red hover:before:bg-red border 
                       border-black relative h-12 px-7 
                       overflow-hidden bg-white text-black
                       shadow-2xl transition-all before:absolute 
                       before:bottom-0 before:left-0 before:top-0
                       before:z-0 before:h-full before:w-0 
                       before:bg-black before:transition-all 
                       before:duration-500 hover:text-white 
                       hover:shadow-gray-500 hover:before:left-0 
                       hover:before:w-full">
            <span className="relative z-10">More</span>
        </button>
        </div>
    )
}
