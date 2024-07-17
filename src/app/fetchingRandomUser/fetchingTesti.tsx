import Image from "next/image"

export default async function FetchingTesti() {
    const res = await fetch("https://randomuser.me/api/?results=1", {
        method:"GET",
        cache:"no-cache"
    }
  )
  const data = await res.json()

  return (
    <div>
      {data.results.map((item: any, index: any) => {
        return (
          <>
            <div key={index}>
                    <Image
                        className="rounded-full"
                        src={item.picture.large} alt="pp"
                        width={200}
                height={200}
                priority
                    />
            </div>
            
              <p className="py-4 text-black">{item.name.first}</p>
            
          </>
        )
      })}
    </div>
  )
}
