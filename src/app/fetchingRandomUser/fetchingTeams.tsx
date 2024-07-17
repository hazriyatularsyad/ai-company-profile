"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

export default function FetchingTeam() {
  const [user, setUser] = useState<any>()

  const getData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=1", {
      method: "GET",
      cache: "no-cache",
    })

    const data = await res.json()
    setUser(data.results[0])
  }

  useEffect(() => {
    getData()
  }, [])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        <div className="">
          <Image
            className="object-cover rounded-xl"
            src={user.picture.large}
            alt={user.name.first}
            width={300}
            height={300}
            priority
          />
        </div>

        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          {user.name.first}
        </h1>
        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
          {user.email}
        </p>
      </div>
    </div>
  )
}
