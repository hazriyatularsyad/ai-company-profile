import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {

  const response = await fetch(
    "https://cdn.contentful.com/spaces/xclnwby8n8yw/environments/master/entries?access_token=9eEOWTpu5OgW3ta_2Xh0hQ4GTBPiJLbhuBZ2TfKr604", {
      method: "GET",
      cache:"force-cache"
    }
  )
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }


  const jsonData = await response.json()

  return jsonData.items.map((post: any) => ({
    slug:post?.fields?.slug
  }))

}

export default async function DetailService({params}:any) {

const response2 = await fetch(
  `https://cdn.contentful.com/spaces/xclnwby8n8yw/environments/master/entries?access_token=9eEOWTpu5OgW3ta_2Xh0hQ4GTBPiJLbhuBZ2TfKr604&content_type=blog&fields.slug=${params.slug}`, {
    method: "GET",
    cache:"force-cache"
  }
)

  const jsonData2 = await response2.json()

  return (
    <div className="h-screen mx-auto w-1/2">
      <div className=" text-wrap text-center">
        <h1 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl mt-5">
          {jsonData2?.items[0]?.fields?.title}
        </h1>
        <h1 className="text-black mt-5">{jsonData2?.items[0]?.fields?.date}</h1>
        <h1 className="text-black mt-5">
          {documentToReactComponents(jsonData2?.items[0]?.fields?.descrption)}
        </h1>
      </div>
    </div>
  )
}
