import React from 'react'
import FetchingTeam from '../fetchingRandomUser/fetchingTeams'

export default function TeamPage() {
  return (
    <section className="bg-gray-50 w-full dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto ">
        <div className=" lg:flex">
          <div className="mb-10 px-5 text-center flex flex-col justify-center">
            <h2 className="text-3xl  font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Our Teams
            </h2>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center mx-auto items-center py-5">
            <FetchingTeam />
            <FetchingTeam />
            <FetchingTeam />
            <FetchingTeam />
          </div>
        </div>
      </div>
    </section>
  )
}
